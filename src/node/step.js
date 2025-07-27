"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeSubproofNode, isNodeStatementNode, isNodeReferenceNode } from "../utilities/node";

export default class StepNode extends NonTerminalNode {
  getStepNode() {
    const stepNode = null;

    return stepNode;
  }

  getSubproofNode() {
    const subproofNode = this.findChildNode((childNode) => {
      const childNodeSubproofNode = isNodeSubproofNode(childNode);

      if (childNodeSubproofNode) {
        return true;
      }
    }) || null;

    return subproofNode;
  }

  getStatementNode() {
    const statementNode = this.findChildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  getReferenceNode() {
    const referenceNode = this.findChildNode((childNode) => {
      const childNodeReferenceNode = isNodeReferenceNode(childNode);

      if (childNodeReferenceNode) {
        return true;
      }
    }) || null;

    return referenceNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
