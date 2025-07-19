"use strict";

import Node from "../../node";

import { isNodeTypeNode, isNodeVariableNode } from "../../utilities/node";

export default class VariableDeclarationNode extends Node {
  getTypeNode() {
    let typeNode;

    this.someChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        typeNode = childNode; ///

        return true;
      }
    });

    return typeNode;
  }

  getVariableNode() {
    let variableNode;

    this.someChildNode((childNode) => {
      const childNodeVariableNode = isNodeVariableNode(childNode);

      if (childNodeVariableNode) {
        variableNode = childNode; ///

        return true;
      }
    });

    return variableNode;
  }

  getVariableName() {
    const variableNode = this.getVariableNode(),
          variableName = variableNode.getVariableName();

    return variableName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(VariableDeclarationNode, ruleName, childNodes, opacity); }
}
