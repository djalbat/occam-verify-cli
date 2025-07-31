"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { META_TYPE_RULE_NAME, METAVARIABLE_RULE_NAME } from "../../ruleNames";

export default class MetavariableDeclarationNode extends NonTerminalNode {
  getTypeNode() {
    const metavariableNode = this.getMetavariableNode(),
          typeNode = metavariableNode.getTypeNode();

    return typeNode;
  }

  getMetaTypeNode() {
    const ruleName = META_TYPE_RULE_NAME,
          metaTypeNode = this.getNodeByRuleName(ruleName);

    return metaTypeNode
  }

  getMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNode = this.getNodeByRuleName(ruleName);

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
