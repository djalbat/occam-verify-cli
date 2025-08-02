"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TERM_RULE_NAME, METAVARIABLE_RULE_NAME } from "../../ruleNames";

export default class SatisfiesAssertionNode extends NonTerminalNode {
  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getNodesByRuleName(ruleName);

    return termNodes;
  }

  getMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNode = this.getNodeByRuleName(ruleName);

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SatisfiesAssertionNode, ruleName, childNodes, opacity, precedence); }
}
