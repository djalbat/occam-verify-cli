"use strict";

import Label from "./label";
import Antecedent from "./antecedent";
import Consequent from "./consequent";

import { prune } from "./utilities/array";
import { someSubArray } from "./utilities/array";

export default class AxiomLemmaTheorem {
  constructor(labels, antecedents, consequent) {
    this.labels = labels;
    this.antecedents = antecedents;
    this.consequent = consequent;
  }

  getLabels() {
    return this.labels;
  }

  getAntecedents() {
    return this.antecedents;
  }

  getConsequent() {
    return this.consequent;
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

    const antecedentsLength = this.antecedents.length;

    if (antecedentsLength === 0) {
      const substitutions = [],
            consequentMatches = matchConsequent(this.consequent, statementNode, substitutions);

      statementNatches = consequentMatches; ///
    } else {
      const proofSteps = proofContext.getProofSteps();

      statementNatches = someSubArray(proofSteps, antecedentsLength, (proofSteps) => {
        const antecedentsMatchConsequent = matchAntecedentsAndConsequent(this.antecedents, this.consequent, proofSteps, statementNode);

        if (antecedentsMatchConsequent) {
          return true;
        }
      });
    }

    return statementNatches;
  }

  toJSON() {
    const { kind } = this.constructor,
          labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          antecedentsJSON = this.antecedents.map((antecedent) => {
            const antecedentJSON = antecedent.toJSON();

            return antecedentJSON;
          }),
          consequentJSON = this.consequent.toJSON(),
          labels = labelsJSON,  ///
          antecedents = antecedentsJSON,  ///
          consequent = consequentJSON,  ///
          json = {
            kind,
            labels,
            antecedents,
            consequent
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

    let { antecedents } = json;

    const antecedentsJSON = antecedents;  ///

    antecedents = antecedentsJSON.map((antecedentJSON) => {
      const json = antecedentJSON, ///
            antecedent = Antecedent.fromJSON(json, releaseContext);

      return antecedent;
    });

    let { consequent } = json;

    const consequentJSON = consequent;  ///

    json = consequentJSON;  ///

    consequent = Consequent.fromJSON(json, releaseContext);

    return new Class(labels, antecedents, consequent);  ///
  }

  static fromLabelsAntecedentsAndConsequent(Class, labels, antecedents, consequent) { return new Class(labels, antecedents, consequent); }
}

function matchAntecedent(antecedent, proofSteps, substitutions) {
  const proofStep = prune(proofSteps, (proofStep) => {
    const subproofNode = proofStep.getSubproofNode(),
          statementNode = proofStep.getStatementNode();

    if (subproofNode !== null) {
      const subProofMatches = antecedent.matchSubproofNode(subproofNode, substitutions);

      if (!subProofMatches) {  ///
        return true;
      }
    }

    if (statementNode !== null) {
      const statementMatches = antecedent.matchStatementNode(statementNode, substitutions);

      if (!statementMatches) {  ///
        return true;
      }
    }

  }) || null;

  const antecedentMatches = (proofStep !== null);

  return antecedentMatches;
}

function matchAntecedents(antecedent, proofSteps, substitutions) {
  const antecedentsMatches = antecedent.every((antecedent) => {
    const antecedentMatches = matchAntecedent(antecedent, proofSteps, substitutions);

    if (antecedentMatches) {
      return true;
    }
  });

  return antecedentsMatches;
}

function matchConsequent(consequent, statementNode, substitutions) {
  const nonTerminalNodeMatches = consequent.matchStatementNode(statementNode, substitutions),
        consequentMatches = nonTerminalNodeMatches; ///

  return consequentMatches;
}

function matchAntecedentsAndConsequent(antecedents, consequent, proofSteps, statementNode) {
  let antecedentsMatchConsequent = false;

  const substitutions = [],
        antecedentsMatches = matchAntecedents(antecedents, proofSteps, substitutions);

  if (antecedentsMatches) {
    const consequentMatches = matchConsequent(consequent, statementNode, substitutions);

    antecedentsMatchConsequent = consequentMatches;  ///
  }

  return antecedentsMatchConsequent;
}
