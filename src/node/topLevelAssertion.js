"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { SATISFIABLE } from "../constants";
import { isNodeProofNode,
         isNodeDeductionNode,
         isNodeSuppositionNode,
         isNodeParenthesisedLabelsNode } from "../utilities/node";

export default class TopLevelAssertionNode extends NonTerminalNode {
  isSatisfiable() {
    let satisfiable = false;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode,
            content = terminalNode.getContent(),
            contentSatisfiable = (content === SATISFIABLE);

      if (contentSatisfiable) {
        satisfiable = true;
      }

      if (index === 0) {
        return true;
      }
    });

    return satisfiable;
  }

  getLabelNodes() {
    let labelNodes = [];

    const parenthesisedLabelsNode = this.getParenthesisedLabelsNode();

    if (parenthesisedLabelsNode !== null) {
      labelNodes = parenthesisedLabelsNode.getLabelNodes();
    }

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
      const childNodeSuppositionNode = isNodeSuppositionNode(childNode);

      if (childNodeSuppositionNode) {
        return true;
      }
    });

    return suppositionNodes;
  }

  getParenthesisedLabelsNode() {
    const parenthesisedLabelsNode = this.findChildNode((childNode) => {
      const childNodeParenthesisedLabelNode = isNodeParenthesisedLabelsNode(childNode);

      if (childNodeParenthesisedLabelNode) {
        return true;
      }
    }) || null;

    return parenthesisedLabelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
