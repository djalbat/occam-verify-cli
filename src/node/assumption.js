"use strict";

import { NonTerminalNode } from "occam-furtle";

import { STATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class AssumptionpNode extends NonTerminalNode {
  isSingular() {
    let singular = false;

    const statementNode = this.getStatementNode();

    if (statementNode === null) {
      singular = true;
    }

    return singular;
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
