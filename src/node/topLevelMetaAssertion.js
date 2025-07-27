"use strict";

import { NonTerminalNode } from "occam-parsers";
import { isNodeProofNode, isNodePremiseNode, isNodeConclusionNode, isNodeParenthesisedLabelsNode } from "../utilities/node";

export default class TopLevelMetaAssertionNode extends NonTerminalNode {
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
      const childNodeParenthesisedLabelNode = isNodeParenthesisedLabelsNode(childNode);

      if (childNodeParenthesisedLabelNode) {
        return true;
      }
    }) || null;

    return parenthesisedLabelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
