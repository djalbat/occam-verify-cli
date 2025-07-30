"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONALLY } from "../../constants";
import { isNodeTypeNode, isNodeVariableNode } from "../../utilities/node";

export default class VariableDeclarationNode extends NonTerminalNode {
  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
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

  getTypeNode() {
    const typeNode = this.findChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        return true;
      }
    }) || null;

    return typeNode;
  }

  getVariableNode() {
    const variableNode = this.findChildNode((childNode) => {
      const childNodeVariableNode = isNodeVariableNode(childNode);

      if (childNodeVariableNode) {
        return true;
      }
    }) || null;

    return variableNode;
  }

  getVariableName() {
    const variableNode = this.getVariableNode(),
          variableName = variableNode.getVariableName();

    return variableName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
