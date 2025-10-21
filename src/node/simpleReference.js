"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class SimpleReferenceNode extends NonTerminalNode {
  getMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNode = this.getNodeByRuleName(ruleName);

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SimpleReferenceNode, ruleName, childNodes, opacity, precedence); }
}
