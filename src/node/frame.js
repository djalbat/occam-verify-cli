"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { DECLARATION_RULE_NAME, METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class FrameNode extends NonTerminalNode {
  getDeclarationNodes() {
    const ruleName = DECLARATION_RULE_NAME,
          declarationNodes = this.getNodesByRuleName(ruleName);

    return declarationNodes;
  }

  getMetavariableNodes() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNodes = this.getNodesByRuleName(ruleName);

    return metavariableNodes;
  }

  getSingularDeclarationNode() {
    const ruleName = DECLARATION_RULE_NAME,
          singularDeclarationNode = this.getSingularTNodeByRuleName(ruleName);

    return singularDeclarationNode;
  }

  getSingularMetavariableNode() {
    let singularMetavariableNode = null;

    const singularDeclarationNode = this.getSingularDeclarationNode();

    if (singularDeclarationNode !== null) {
      const metavariableNode = singularDeclarationNode.getMetavariableNode();

      singularMetavariableNode = metavariableNode;  ///
    }

    return singularMetavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence); }
}
