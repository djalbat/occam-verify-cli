"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TERM_RULE_NAME, TYPE_RULE_NAME } from "../../ruleNames";

export default class TypeAssertionNode extends NonTerminalNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeAssertionNode, ruleName, childNodes, opacity, precedence); }
}
