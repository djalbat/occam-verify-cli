"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeMetaTypeNode, isNodeMetavariableNode } from "../../utilities/node";

export default class MetavariableDeclarationNode extends NonTerminalNode {
  getTypeNode() {
    const metavariableNode = this.getMetavariableNode(),
          typeNode = metavariableNode.getTypeNode();

    return typeNode;
  }

  getMetaTypeNode() {
    const metaTypeNode = this.findChildNode((childNode) => {
      const childNodeMetaTypeNode = isNodeMetaTypeNode(childNode);

      if (childNodeMetaTypeNode) {
        return true;
      }
    }) || null;

    return metaTypeNode
  }

  getMetavariableNode() {
    const metavariableNode = this.findChildNode((childNode) => {
      const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

      if (childNodeMetavariableNode) {
        return true;
      }
    }) || null;

    return metavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
