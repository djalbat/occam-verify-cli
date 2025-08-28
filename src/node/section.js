"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { HYPOTHESIS_RULE_NAME } from "../ruleNames";

export default class SectionNode extends NonTerminalNode {
  getHypothesisNodes() {
    const ruleName = HYPOTHESIS_RULE_NAME,
          hypothesisNodes = this.getNodesByRuleName(ruleName);

    return hypothesisNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SectionNode, ruleName, childNodes, opacity, precedence); }
}
