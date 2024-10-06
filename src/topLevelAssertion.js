"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import Substitutions from "./substitutions";

import { reverse, correlate } from "./utilities/array";

export default class TopLevelAssertion {
  constructor(fileContext, labels, suppositions, consequent, proof) {
    this.fileContext = fileContext;
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequent = consequent;
    this.proof = proof;
  }

  getFileContext() {
    return this.fileContext;
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
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          suppositionsJSON = this.suppositions.map((supposition) => {
            const suppositionJSON = supposition.toJSON();

            return suppositionJSON;
          }),
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
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, fileContext);

      return label;
    });

    let { suppositions } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSON(json, fileContext);

      return supposition;
    });

    let { consequent } = json;

    const consequentJSON = consequent;  ///

    json = consequentJSON;  ///

    consequent = Consequent.fromJSON(json, fileContext);

    const proof = null;

    rule = new Class(fileContext, labels, suppositions, consequent, proof);

    return rule;
  }
}

export function labelsStringFromLabels(labels) {
  const labelsString = labels.reduce((labelsString, label) => {
    const labelString = label.getString();

    labelsString = (labelsString === null) ?
                     labelString: ///
                       `${labelString}, ${labelString}`;

    return labelsString;
  }, null);

  return labelsString;
}