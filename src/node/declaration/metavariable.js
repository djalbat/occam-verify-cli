"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeMetaTypeNode } from "../../utilities/node";

export default class MetavariableDeclarationNode extends NonTerminalNode {
  getMetaTypeNode() {
    const metaTypeNode = this.findChildNode((childNode) => {
      const childNodeMetaTypeNode = isNodeMetaTypeNode(childNode);

      if (childNodeMetaTypeNode) {
        return true;
      }
    }) || null;

    return metaTypeNode
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetavariableDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
