"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { STATEMENT_RULE_NAME } from "../ruleNames";

export default class ConclusionNode extends NonTerminalNode {
  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConclusionNode, ruleName, childNodes, opacity, precedence); }
}
