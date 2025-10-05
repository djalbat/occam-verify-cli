"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { STATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class DeclarationNode extends NonTerminalNode {
  isSimple() {
    const statementNode = this.getStatementNode(),
          simple = (statementNode === null);

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DeclarationNode, ruleName, childNodes, opacity, precedence); }
}
