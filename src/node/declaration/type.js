"use strict";

import { NonTerminalNode } from "occam-parsers";

import { PROVISIONAL } from "../../constants";
import { isNodeTypeNode, isNodeTypesNode } from "../../utilities/node";

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

  getTypesNode() {
    const typesNode = this.findChildNode((childNode) => {
      const childNodeTypesNode = isNodeTypesNode(childNode);

      if (childNodeTypesNode) {
        return true;
      }
    }) || null;

    return typesNode;
  }

  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode,
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
    let superTypeNodes = [];

    const typesNode = this.getTypesNode();

    if (typesNode !== null) {
      const typeNodes = typesNode.getTypeNodes();

      superTypeNodes = typeNodes; ///
    }

    return superTypeNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}

