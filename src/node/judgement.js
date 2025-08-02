"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { FRAME_RULE_NAME, DECLARATION_RULE_NAME } from "../ruleNames";

export default class JudgementNode extends NonTerminalNode {
  getFrameNode() {
    const ruleName = FRAME_RULE_NAME,
          frameNode = this.getNodeByRuleName(ruleName);

    return frameNode;
  }

  getDeclarationNode() {
    const ruleName = DECLARATION_RULE_NAME,
          declarationNodes = this.getNodeByRuleName(ruleName);

    return declarationNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(JudgementNode, ruleName, childNodes, opacity, precedence); }
}
