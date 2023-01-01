"use strict";

import Label from "./label";
import Antecedent from "./antecedent";
import Consequent from "./consequent";

import { prune } from "./utilities/array";
import { AXIOM_KIND } from "./kinds";
import { someSubArray } from "./utilities/array";

export default class Axiom {
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
      const assertions = proofContext.getAssertions();

      statementNatches = someSubArray(assertions, antecedentsLength, (assertions) => {
        const antecedentsMatchConsequent = matchAntecedentsAndConsequent(this.antecedents, this.consequent, assertions, statementNode);

        if (antecedentsMatchConsequent) {
          return true;
        }
      });
    }

    return statementNatches;
  }

  toJSON() {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          antecedentsJSON = this.antecedents.map((antecedent) => {
            const antecedentJSON = antecedent.toJSON();

            return antecedentJSON;
          }),
          consequentJSON = this.consequent.toJSON(),
          kind = AXIOM_KIND,
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

  static fromJSON(json, releaseContext) {
    let axiom;

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

    axiom = new Axiom(labels, antecedents, consequent);

    return axiom;
  }

  static fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent) {
    const axiom = new Axiom(labels, antecedents, consequent);

    return axiom;
  }
}

function matchAntecedent(antecedent, assertions, substitutions) {
  const assertion = prune(assertions, (assertion) => {
    const subproofNode = assertion.getSubproofNode(),
          statementNode = assertion.getStatementNode();

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

  const antecedentMatches = (assertion !== null);

  return antecedentMatches;
}

function matchAntecedents(antecedent, assertions, substitutions) {
  const antecedentsMatches = antecedent.every((antecedent) => {
    const antecedentMatches = matchAntecedent(antecedent, assertions, substitutions);

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

function matchAntecedentsAndConsequent(antecedents, consequent, assertions, statementNode) {
  let antecedentsMatchConsequent = false;

  const substitutions = [],
        antecedentsMatches = matchAntecedents(antecedents, assertions, substitutions);

  if (antecedentsMatches) {
    const consequentMatches = matchConsequent(consequent, statementNode, substitutions);

    antecedentsMatchConsequent = consequentMatches;  ///
  }

  return antecedentsMatchConsequent;
}
