"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { TERM_RULE_NAME } from "../ruleNames";

export default class ArgumentNode extends NonTerminalNode {
  getSingularTermNode() {
    const ruleName = TERM_RULE_NAME,
          singularTermNode = this.getSingularTNodeByRuleName(ruleName);

    return singularTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ArgumentNode, ruleName, childNodes, opacity, precedence); }
}
