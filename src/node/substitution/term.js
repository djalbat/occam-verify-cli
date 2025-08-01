"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TERM_RULE_NAME } from "../../ruleNames";

export default class TermSubstitutionNode extends NonTerminalNode {
  getLastTermNode() {
    const ruleName = TERM_RULE_NAME,
          lastTermNode = this.getLastNodeByRuleName(ruleName);

    return lastTermNode;
  }

  getFirstTermNode() {
    const ruleName = TERM_RULE_NAME,
          firstTermNode = this.getFirstNodeByRuleName(ruleName);

    return firstTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
