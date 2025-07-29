"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeProofNode,
         isNodePremiseNode,
         isNodeConclusionNode,
         isNodeParenthesisedLabelsNode } from "../utilities/node";

export default class RuleNode extends NonTerminalNode {
  getLabelNodes() {
    const parenthesisedLabelsNode = this.getParenthesisedLabelsNode(),
          labelNodes = parenthesisedLabelsNode.getLabelNodes();

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

  getPremiseNodes() {
    const premiseNodes = this.filterChildNode((childNode) => {
      const childNOdePremiseNode = isNodePremiseNode(childNode);

      if (childNOdePremiseNode) {
        return true;
      }
    }) || null;

    return premiseNodes;
  }

  getConclusionNode() {
    const conclusionNode = this.findChildNode((childNode) => {
      const childNOdeConclusionNode = isNodeConclusionNode(childNode);

      if (childNOdeConclusionNode) {
        return true;
      }
    }) || null;

    return conclusionNode;
  }

  getParenthesisedLabelsNode() {
    const parenthesisedLabelsNode = this.findChildNode((childNode) => {
      const childNodeParenthesisedLabelsNode = isNodeParenthesisedLabelsNode(childNode);

      if (childNodeParenthesisedLabelsNode) {
        return true;
      }
    }) || null;

    return parenthesisedLabelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence); }
}
