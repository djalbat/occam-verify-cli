"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStepNode, isNodeSubproofNode, isNodeStatementNode, isNodeSubDerivationNode } from "../utilities/node";

export default class SubproofNode extends NonTerminalNode {
  getStepNode() {
    const stepNode = this.findChildNode((childNode) => {
      const childNodeStepNode = isNodeStepNode(childNode);

      if (childNodeStepNode) {
        return true;
      }
    }) || null;

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

  getSubDerivationNode() {
    const subDerivationNode = this.findChildNode((childNode) => {
      const childNodeSubDerivationNode = isNodeSubDerivationNode(childNode);

      if (childNodeSubDerivationNode) {
        return true;
      }
    }) || null;

    return subDerivationNode;
  }

  getSuppositionNodes() {
    const suppositionNodes = this.filterChildNode((childNode) => {
      const childNodeSuppositionNode = isNodeStatementNode(childNode);

      if (childNodeSuppositionNode) {
        return true;
      }
    });

    return suppositionNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence); }
}
