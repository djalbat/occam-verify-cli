"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { STATEMENT_RULE_NAME } from "../../ruleNames";

export default class StatementSubstitutionNode extends NonTerminalNode {
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
