"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { REFERENCE_RULE_NAME } from "../../ruleNames";

export default class ReferenceSubstitutionNode extends NonTerminalNode {
  getLastReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          lastReferenceNode = this.getLastNodeByRuleName(ruleName);

    return lastReferenceNode;
  }

  getFirstReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          firstReferenceNode = this.getFirstNodeByRuleName(ruleName);

    return firstReferenceNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
