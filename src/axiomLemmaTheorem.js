"use strict";

import Label from "./label";
import Supposition from "./supposition";
import Consequence from "./consequence";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class AxiomLemmaTheorem {
  constructor(labels, suppositions, consequence) {
    this.labels = labels;
    this.suppositions = suppositions;
    this.consequence = consequence;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getConsequence() {
    return this.consequence;
  }

  matchLabelName(labelName) {
    const matchesLabelName = this.labels.some((label) => {
      const name = labelName, ///
            labelMatchesName = label.matchName(name);

      if (labelMatchesName) {
        return true;
      }
    });

    return matchesLabelName;
  }

  matchStatement(statementNode, proofContext) {
    let statementNatches;

    const suppositionsLength = this.suppositions.length;

    if (suppositionsLength === 0) {
      const substitutions = [],
            consequenceMatches = matchConsequence(this.consequence, statementNode, substitutions);

      statementNatches = consequenceMatches; ///
    } else {
      const proofSteps = proofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, suppositionsLength, (proofSteps) => {
        const suppositionsMatchConsequence = matchSuppositionsAndConsequence(this.suppositions, this.consequence, proofSteps, statementNode);

        if (suppositionsMatchConsequence) {
          return true;
        }
      });
    }

    return statementNatches;
  }

  toJSON(tokens) {
    const { kind } = this.constructor,
          labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(tokens);

            return labelJSON;
          }),
          suppositionsJSON = this.suppositions.map((supposition) => {
            const suppositionJSON = supposition.toJSON(tokens);

            return suppositionJSON;
          }),
          consequenceJSON = this.consequence.toJSON(tokens),
          labels = labelsJSON,  ///
          suppositions = suppositionsJSON,  ///
          consequence = consequenceJSON,  ///
          json = {
            kind,
            labels,
            suppositions,
            consequence
          };

    return json;
  }

  static fromJSON(Class, json, releaseContext) {
    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, releaseContext);

      return label;
    });

    let { suppositions } = json;

    const suppositionsJSON = suppositions;  ///

    suppositions = suppositionsJSON.map((suppositionJSON) => {
      const json = suppositionJSON, ///
            supposition = Supposition.fromJSON(json, releaseContext);

      return supposition;
    });

    let { consequence } = json;

    const consequenceJSON = consequence;  ///

    json = consequenceJSON;  ///

    consequence = Consequence.fromJSON(json, releaseContext);

    return new Class(labels, suppositions, consequence);  ///
  }

  static fromLabelsSuppositionsAndConsequence(Class, labels, suppositions, consequence) { return new Class(labels, suppositions, consequence); }
}

function matchSupposition(supposition, proofSteps, substitutions) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode();

    if (subproofNode !== null) {
      const subProofMatches = supposition.matchSubproofNode(subproofNode, substitutions);

      if (!subProofMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementMatches = supposition.matchStatementNode(statementNode, substitutions);

      if (!statementMatches) {  ///
        return true;
      }
    }

  }) || null;

  const suppositionMatches = (proofStep !== null);

  return suppositionMatches;
}

function matchSuppositions(supposition, proofSteps, substitutions) {
  const suppositionsMatches = supposition.every((supposition) => {
    const suppositionMatches = matchSupposition(supposition, proofSteps, substitutions);

    if (suppositionMatches) {
      return true;
    }
  });

  return suppositionsMatches;
}

function matchConsequence(consequence, statementNode, substitutions) {
  const nonTerminalNodeMatches = consequence.matchStatementNode(statementNode, substitutions),
        consequenceMatches = nonTerminalNodeMatches; ///

  return consequenceMatches;
}

function matchSuppositionsAndConsequence(suppositions, consequence, proofSteps, statementNode) {
  let suppositionsMatchConsequence = false;

  const substitutions = [],
        suppositionsMatches = matchSuppositions(suppositions, proofSteps, substitutions);

  if (suppositionsMatches) {
    const consequenceMatches = matchConsequence(consequence, statementNode, substitutions);

    suppositionsMatchConsequence = consequenceMatches;  ///
  }

  return suppositionsMatchConsequence;
}
