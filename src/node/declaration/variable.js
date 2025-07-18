"use strict";

import Node from "../../node";

import { PROVISIONALLY } from "../../constants";
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

  isProvisional() {
    const provisional = this.fromSecondLastChildNode((secondLastChildNode) => {
      let provisional = false;

      const secondLastChildNodeTerminalNode = secondLastChildNode.isTerminalNode();

      if (secondLastChildNodeTerminalNode) {
        const terminalNode = secondLastChildNode, ///
              content = terminalNode.getContent(),
              contentProvisionally = (content === PROVISIONALLY);

        if (contentProvisionally) {
          provisional = true;
        }
      }

      return provisional;
    });

    return provisional;
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
