"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeProofNode, isNodeSuppositionNode, isNodeDeductionNode, isNodeParenthesisedLabelNode } from "../utilities/node";

export default class TopLevelMetaAssertionNode extends NonTerminalNode {
  getLabelNode() {
    const parenthesisedLabelNode = this.getParenthesisedLabelNode(),
          labelNodes = parenthesisedLabelNode.getLabelNode();

    return labelNodes;
  }

  getProofNode() {
    const proofNode = this.findChildNode((childNode) => {
      const childNOdeProofNode = isNodeProofNode(childNode);

      if (childNOdeProofNode) {
        return true;
      }
    }) || null;

    return proofNode;
  }

  getDeductionNode() {
    const deductionNode = this.findChildNode((childNode) => {
      const childNOdeDeductionNode = isNodeDeductionNode(childNode);

      if (childNOdeDeductionNode) {
        return true;
      }
    }) || null;

    return deductionNode;
  }

  getSuppositionNodes() {
    const suppositionNodes = this.filterChildNode((childNode) => {
      const childNOdeSuppositionNode = isNodeSuppositionNode(childNode);

      if (childNOdeSuppositionNode) {
        return true;
      }
    }) || null;

    return suppositionNodes;
  }

  getParenthesisedLabelNode() {
    const parenthesisedLabelNode = this.findChildNode((childNode) => {
      const childNodeParenthesisedLabelNode = isNodeParenthesisedLabelNode(childNode);

      if (childNodeParenthesisedLabelNode) {
        return true;
      }
    }) || null;

    return parenthesisedLabelNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
