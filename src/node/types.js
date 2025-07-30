"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeTypeNode } from "../utilities/node";

export default class TypesNode extends NonTerminalNode {
  getTypeNodes() {
    const typeNodes = this.filterChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    });

    return typeNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypesNode, ruleName, childNodes, opacity, precedence); }
}
