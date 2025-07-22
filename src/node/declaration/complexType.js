"use strict";

import Node from "../../node";

import { PROVISIONAL } from "../../constants";
import { isNodeTypeNode, isNodePropertyDeclarationNode } from "../../utilities/node";

export default class ComplexTypeDeclarationNode extends Node {
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
    const provisional = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent(),
            contentProvisional = (content === PROVISIONAL),
            provisional = contentProvisional; ///

      return provisional;
    });

    return provisional;
  }

  getSuperTypeNodes() {
    const typeNodes = this.reduceChildNode((typeNodes, childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        const typeNode = childNode;  ///

        typeNodes.push(typeNode);
      }

      return typeNodes;
    }, []);

    typeNodes.pop();

    const superTypeNodes = typeNodes; ///

    return superTypeNodes;
  }

  getPropertyDeclarationNodes() {
    const propertyDeclarationNodes = this.reduceChildNode((propertyDeclarationNodes, childNode) => {
      const childNodePropertyDeclarationNode = isNodePropertyDeclarationNode(childNode);

      if (childNodePropertyDeclarationNode) {
        const propertyDeclarationNode = childNode;  ///

        propertyDeclarationNodes.push(propertyDeclarationNode);
      }

      return propertyDeclarationNodes;
    }, []);

    return propertyDeclarationNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
