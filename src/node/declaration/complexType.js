"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONAL } from "../../constants";
import { isNodeTypeNode, isNodeTypesNode, isNodePropertyDeclarationNode } from "../../utilities/node";

export default class ComplexTypeDeclarationNode extends NonTerminalNode {
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

  getPropertyDeclarationNodes() {
    const propertyDeclarationNodes = this.filterChildNode((childNode) => {
      const childNodePropertyDeclarationNode = isNodePropertyDeclarationNode(childNode);

      if (childNodePropertyDeclarationNode) {
        return true;
      }
    });

    return propertyDeclarationNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
