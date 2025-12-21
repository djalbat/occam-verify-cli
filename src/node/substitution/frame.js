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

  getLastMetavariableNode() {
    let lastMetavariableNode = null;

    const lastFrameNode = this.getLastFrameNode(),
          singularMetavariableNode = lastFrameNode.getSingularMetavariableNode();

    if (singularMetavariableNode !== null) {
      lastMetavariableNode = singularMetavariableNode;  ///
    }

    return lastMetavariableNode;
  }

  getFirstMetavariableNode() {
    let firstMetavariableNode = null;

    const firstFrameNode = this.getFirstFrameNode(),
          singularMetavariableNode = firstFrameNode.getSingularMetavariableNode();

    if (singularMetavariableNode !== null) {
      firstMetavariableNode = singularMetavariableNode;  ///
    }

    return firstMetavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
