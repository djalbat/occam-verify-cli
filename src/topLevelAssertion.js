"use strict";

import { arrayUtilities } from "necessary";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import Substitutions from "./substitutions";

import { EMPTY_STRING } from "./constants";

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

    const proofSteps = localContext.getProofSteps(),
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
    const labelsJSON = labelsToLabelJSON(this.labels),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          consequentJSON = this.consequent.toJSON(),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequent = consequentJSON,  ///
          json = {
            labels,
            suppositions,
            consequent
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          consequent = consequentFromJSON(json, fileContext),
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

export function labelsFromJSON(json, fileContext) {
  let { labels } = json;

  const labelsJSON = labels;  ///

  labels = labelsJSON.map((labelJSON) => {
    const json = labelJSON, ///
          label = Label.fromJSON(json, fileContext);

    return label;
  });

  return labels;
}

export function consequentFromJSON(json, fileContext) {
  let { consequent } = json;

  const consequentJSON = consequent;  ///

  json = consequentJSON;  ///

  consequent = Consequent.fromJSON(json, fileContext);

  return consequent;
}

export function suppositionsFromJSON(json, fileContext) {
  let { suppositions } = json;

  const suppositionsJSON = suppositions;  ///

  suppositions = suppositionsJSON.map((suppositionJSON) => {
    const json = suppositionJSON, ///
          supposition = Supposition.fromJSON(json, fileContext);

    return supposition;
  });

  return suppositions;
}

export function labelsToLabelJSON(labels) {
  const labelsJSON = labels.map((label) => {
    const labelJSON = label.toJSON();

    return labelJSON;
  });

  return labelsJSON;
}

export function suppositionsToSuppositionsJSON(suppositions) {
  const suppositionsJSON = suppositions.map((supposition) => {
    const suppositionJSON = supposition.toJSON();

    return suppositionJSON;
  });

  return suppositionsJSON;
}
