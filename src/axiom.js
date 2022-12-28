"use strict";

import Label from "./label";

import { nodeQuery } from "./utilities/query";
import { AXIOM_KIND } from "./kinds";
import { nodeAsString } from "./utilities/string";
import { UNQUALIFIED_STATEMENT_RULE_NAME } from "./ruleNames";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

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

  static fromJSON(json, releaseContext) {
    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, releaseContext);

      return label;
    });

    const { statement, consequent, supposition } = json;

    let axiom;

    if (false) {
      ///
    } else if (statement !== null) {
      const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
            content = `${statement}
`,
            node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
            unqualifiedStatementNode = node,  ///
            statementNode = statementNodeQuery(unqualifiedStatementNode),
            consequentNode = null,
            suppositionNode = null;

      axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
    } else if ((consequent !== null) && (supposition !== null)) {
      let node,
          content,
          statementNode,
          unqualifiedStatementNode;

      const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME;

      content = `${consequent}
`;

      node = releaseContext.nodeFromContentAndRuleName(content, ruleName);

      unqualifiedStatementNode = node;  ///

      statementNode = statementNodeQuery(unqualifiedStatementNode);

      const consequentNode = statementNode; ///

      content = `${supposition}
`;

      node = releaseContext.nodeFromContentAndRuleName(content, ruleName);

      unqualifiedStatementNode = node;  ///

      statementNode = statementNodeQuery(unqualifiedStatementNode);

      const suppositionNode = statementNode;  ///

      statementNode = null;

      axiom = new Axiom(labels, statementNode, consequentNode, suppositionNode);
    }

    return axiom;
  }

  static fromLabelsAndStatementNode(labels, statementNode) {
    const suppositionStatementNode = null,
          consequentStatementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }

  static fromLabelsSuppositionStatementNodeConsequentAndStatementNode(labels, suppositionStatementNode, consequentStatementNode) {
    const statementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }
}
