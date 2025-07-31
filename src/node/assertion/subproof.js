"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { STATEMENT_RULE_NAME } from "../../ruleNames";

export default class SubproofAssertionNode extends NonTerminalNode {
  getStatementNodes() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNodes = this.getNodesByRuleName(ruleName);

    return statementNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofAssertionNode, ruleName, childNodes, opacity, precedence); }
}
