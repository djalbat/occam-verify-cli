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

const { extract, reverse, backwardsEvery } = arrayUtilities;

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
    let statementUnified;

    const { Substitutions } = shim,
      substitutions = Substitutions.fromNothing(),
      consequentUnified = this.unifyConsequent(statement, substitutions, localContext);

    if (consequentUnified) {
      const suppositionsUnified = this.unifySupposition(substitutions, localContext);

      if (suppositionsUnified) {
        const substitutionsResolved = substitutions.areResolved();

        statementUnified = substitutionsResolved; ///
      }
    }

    return statementUnified;
  }

  unifyConsequent(statement, substitutions, localContext) {
    let consequentUnified;

    const consequentString = this.consequent.getString();

    localContext.trace(`Unifying the '${consequentString}' consequent...`);

    const statementUnified = this.consequent.unifyStatement(statement, substitutions, localContext);  ///

    consequentUnified = statementUnified; ///

    if (consequentUnified) {
      localContext.debug(`...unified the '${consequentString}' consequent`);
    }

    return consequentUnified;
  }

  unifySupposition(substitutions, localContext) {
    let proofSteps = localContext.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const suppositionsUnified = backwardsEvery(this.suppositions, (supposition) => {
      const suppositionUnified = this.unifyPremise(supposition, proofSteps, substitutions, localContext);

      if (suppositionUnified) {
        return true;
      }
    });

    return suppositionsUnified;
  }

  unifyPremise(supposition, proofSteps, substitutions, localContext) {
    let suppositionUnified  =false;

    const suppositionString = supposition.getString();

    localContext.trace(`Unifying the '${suppositionString}' supposition...`);

    const suppositionResolvedIndependently = supposition.resolveIndependently(substitutions, localContext);

    if (suppositionResolvedIndependently) {
      suppositionUnified = true;
    } else {
      const proofStep = extract(proofSteps, (proofStep) => {
        const proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, localContext);

        if (proofStepUnified) {
          return true;
        }
      });

      if (proofStep !== null) {
        suppositionUnified = true;
      }
    }

    if (suppositionUnified) {
      localContext.debug(`...unified the '${suppositionString}' supposition.`);
    }

    return suppositionUnified;
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

