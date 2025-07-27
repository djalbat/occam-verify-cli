"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeParameterNode, isNodeReferenceNode } from "../utilities/node";

export default class ProcedureCallNode extends NonTerminalNode {
  getReferenceNode() {
    const referenceNode = this.findChildNode((childNode) => {
      const childNodeReferenceNode = isNodeReferenceNode(childNode);

      if (childNodeReferenceNode) {
        return true;
      }
    }) || null;

    return referenceNode;
  }

  getParameterNodes() {
    const parameterNodes = this.filterChildNodes((childNode) => {
      const childNodeParameterNode = isNodeParameterNode(childNode);

      if (childNodeParameterNode) {
        return true;
      }
    });

    return parameterNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence); }
}
