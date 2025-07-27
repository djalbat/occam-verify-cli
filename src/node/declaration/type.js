"use strict";

import { NonTerminalNode } from "occam-parsers";

import { PROVISIONAL } from "../../constants";
import { isNodeTypeNode } from "../../utilities/node";

export default class TypeDeclarationNode extends NonTerminalNode {
  getTypeName() {
    let typeName = null;

    this.someChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        const typeNode = childNode;  ///

        typeName = typeNode.getTypeName();

        return true;
      }
    });

    return typeName;
  }

  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              content = terminalNode.getContent(),
              contentProvisional = (content === PROVISIONAL);

        if (contentProvisional) {
          provisional = true;

          return true;
        }
      }
    });

    return provisional;
  }

  getSuperTypeNodes() {
    const typeNodes = this.filterChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    });

    typeNodes.pop();

    const superTypeNodes = typeNodes; ///

    return superTypeNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}

