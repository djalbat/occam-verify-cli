"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";

import { EMPTY_STRING } from "./constants";
import { labelsFromJSON,
         labelsToLabelsJSON,
         consequentFromJSON,
         suppositionsFromJSON,
         consequentToConsequentJSON,
         suppositionsToSuppositionsJSON } from "./utilities/json";

const { reverse, correlate } = arrayUtilities;

export default class TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, consequent, proof) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
    this.proof = proof;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getConsequent() {
    return this.consequent;
  }

  getProof() {
    return this.proof;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return metavariableNodeMatches;
  }

  unifyStatement(statement, localContext) {
    let statementUnified = false;

    const { Substitutions } = shim,
          proofSteps = localContext.getProofSteps(),
          substitutions = Substitutions.fromNothing(),
          proofStepsUnified = this.unifyProofSteps(proofSteps, substitutions, localContext);

    if (proofStepsUnified) {
      statementUnified = this.consequent.unifyStatement(statement, substitutions, localContext);
    }

    return statementUnified;
  }

  unifyProofSteps(proofSteps, substitutions, localContext) {
    let proofStepsUnified;

    let suppositions = this.suppositions;

    suppositions = reverse(suppositions); ///

    proofSteps = reverse(proofSteps); ///

    proofStepsUnified = correlate(suppositions, proofSteps, (supposition, proofStep) => {
      const proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, localContext);

      if (proofStepUnified) {
        return true;
      }
    });

    return proofStepsUnified;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          consequentJSON = consequentToConsequentJSON(this.consequent),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          labels = labelsJSON,  ///
          consequent = consequentJSON,  ///
          suppositions = suppositionsJSON,  ///
          json = {
            labels,
            consequent,
            suppositions
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          string = stringFromLabels(labels),
          proof = null,
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof);

    return topLevelAssertion;
  }
}

export function stringFromLabels(labels) {
  const string = labels.reduce((string, label) => {
    const labelString = label.getString();

    string = (string === EMPTY_STRING) ?
               labelString: ///
                 `${labelString}, ${labelString}`;

    return string;
  }, EMPTY_STRING);

  return string;
}

