"use strict";

import SubstitutionNode from "../../node/substitution";

import { STATEMENT_RULE_NAME } from "../../ruleNames";

export default class StatementSubstitutionNode extends SubstitutionNode {
  getMetavariableNode() {
    const lastMetavariableNode = this.getLastVariableNode(),
          metavariableNode = lastMetavariableNode;  ///

    return metavariableNode;
  }

  getStatementNode() {
    const firstStatementNode = this.getFirstStatementNode(),
          statementNode = firstStatementNode; ///

    return statementNode;
  }

  getLastStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          lastStatementNode = this.getLastNodeByRuleName(ruleName);

    return lastStatementNode;
  }

  getFirstStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          firstStatementNode = this.getFirstNodeByRuleName(ruleName);

    return firstStatementNode;
  }

  getLastMetavariableNode() {
    let lastMetavariableNode = null;

    const lastStatementNode = this.getLastStatementNode(),
          singularMetavariableNode = lastStatementNode.getSingularMetavariableNode();

    if (singularMetavariableNode !== null) {
      lastMetavariableNode = singularMetavariableNode;  ///
    }

    return lastMetavariableNode;
  }

  getFirstMetavariableNode() {
    let firstMetavariableNode = null;

    const firstStatementNode = this.getFirstStatementNode(),
          singularMetavariableNode = firstStatementNode.getSingularMetavariableNode();

    if (singularMetavariableNode !== null) {
      firstMetavariableNode = singularMetavariableNode;  ///
    }

    return firstMetavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return SubstitutionNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
