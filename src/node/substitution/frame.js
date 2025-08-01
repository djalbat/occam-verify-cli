"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { FRAME_RULE_NAME } from "../../ruleNames";

export default class FrameSubstitutionNode extends NonTerminalNode {
  getLastFrameNode() {
    const ruleName = FRAME_RULE_NAME,
          lastFrameNode = this.getLastNodeByRuleName(ruleName);

    return lastFrameNode;
  }

  getFirstFrameNode() {
    const ruleName = FRAME_RULE_NAME,
          firstFrameNode = this.getFirstNodeByRuleName(ruleName);

    return firstFrameNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
