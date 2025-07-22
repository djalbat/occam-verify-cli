"use strict";

import Node from "../../node";

import { PROVISIONAL } from "../../constants";
import { isNodeTypeNode } from "../../utilities/node";

export default class TypeDeclarationNode extends Node {
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(TypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}

