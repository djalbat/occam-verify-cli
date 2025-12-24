"use strict";

import DocumentNode from "../nonTerminalNode";

import { STATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class AssumptionpNode extends DocumentNode {
  isSimple() {
    let simple = false;

    const statementNode = this.getStatementNode();

    if (statementNode === null) {
      simple = true;
    }

    return simple;
  }

  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  getMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNode = this.getNodeByRuleName(ruleName);

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return DocumentNode.fromRuleNameChildNodesOpacityAndPrecedence(AssumptionpNode, ruleName, childNodes, opacity, precedence); }
}
