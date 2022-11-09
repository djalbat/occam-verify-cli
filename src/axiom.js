"use strict";

import Label from "./label";

import { AXIOM_KIND } from "./kinds";
import { nodeAsString } from "./utilities/string";
import { STATEMENT_RULE_NAME } from "occam-custom-grammars/lib/ruleNames";

export default class Axiom {
  constructor(labels, statementNode, suppositionStatementNode, consequentStatementNode) {
    this.labels = labels;
    this.statementNode = statementNode;
    this.suppositionStatementNode = suppositionStatementNode;
    this.consequentStatementNode = consequentStatementNode;
  }

  getLabels() {
    return this.labels;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getSuppositionStatementNode() {
    return this.suppositionStatementNode;
  }

  getConsequentStatementNode() {
    return this.consequentStatementNode;
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

  toJSON() {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          statementString = nodeAsString(this.statementNode),
          consequentStatementString = nodeAsString(this.consequentStatementNode),
          suppositionStatementString = nodeAsString(this.suppositionStatementNode),
          kind = AXIOM_KIND,
          labels = labelsJSON,  ///
          statement = statementString,  ///
          consequent = consequentStatementString, ///
          supposition = suppositionStatementString, ///
          json = {
            kind,
            labels,
            statement,
            consequent,
            supposition
          };

    return json;
  }

  static fromJSON(json, callback) {
    let { labels } = json;

    const { statement, consequent, supposition } = json;

    labels = labels.map((label) => {
      const json = label; ///

      label = Label.fromJSON(json);

      return label;
    });

    let statementNode = null,
        consequentNode = null,
        suppositionNode = null;

    if (statement !== null) {
      const content = statement,  ///
            ruleName = STATEMENT_RULE_NAME,
            node = callback(content, ruleName);

      statementNode = node; ///
    }

    if (consequent !== null) {
      const content = consequent,  ///
            ruleName = STATEMENT_RULE_NAME,
            node = callback(content, ruleName);

      consequentNode = node; ///
    }

    if (supposition !== null) {
      const content = supposition,  ///
            ruleName = STATEMENT_RULE_NAME,
            node = callback(content, ruleName);

      suppositionNode = node; ///
    }

    const axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);

    return axiom;
  }

  static fromStatementNodeAndLabels(statementNode, labels) {
    const suppositionStatementNode = null,
          consequentStatementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }

  static fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels) {
    const statementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }
}
