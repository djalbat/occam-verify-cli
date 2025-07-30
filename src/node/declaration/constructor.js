"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONALLY } from "../../constants";
import { isNodeTermNode, isNodeTypeNode } from "../../utilities/node";

export default class ConstructorDeclarationNode extends NonTerminalNode {
  getTermNode() {
    const termNode = this.findChildNode((childNode) => {
      const childNodeTermNode = isNodeTermNode(childNode);

      if (childNodeTermNode) {
        return true;
      }
    }) || null;

    return termNode;
  }

  getTypeNode() {
    const typeNode = this.findChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    }) || null;

    return typeNode;
  }

  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode,
              content = terminalNode.getContent(),
              contentProvisionally = (content === PROVISIONALLY);

        if (contentProvisionally) {
          provisional = true;

          return true;
        }
      }
    });

    return provisional;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
