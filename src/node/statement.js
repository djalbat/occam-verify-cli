"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode,
         isNodeFrameNode,
         isNodeEqualityNode,
         isNodeJudgementNode,
         isNodeMetavariableNode,
         isNodeTypeAssertionNode,
         isNodeSubproofAssertionNode,
         isNodePropertyAssertionNode } from "../utilities/node";

export default class StatementNode extends NonTerminalNode {
  getTermNodes() {
    const termNodes = this.filterDescendantNode((descendantNode) => {
      const descendantNodeTermNode = isNodeTermNode(descendantNode);

      if (descendantNodeTermNode) {
        return true;
      }
    });

    return termNodes;
  }

  getFrameNodes() {
    const frameNodes = this.filterDescendantNode((descendantNode) => {
      const descendantNodeFrameNode = isNodeFrameNode(descendantNode);

      if (descendantNodeFrameNode) {
        return true;
      }
    });

    return frameNodes;
  }

  getEqualityNode() {
    const equalityNode = this.findChildNode((childNode) => {
      const childNodeEqualityNode = isNodeEqualityNode(childNode);

      if (childNodeEqualityNode) {
        return true;
      }
    }) || null;

    return equalityNode;
  }

  getJudgementNode() {
    const judgementNode = this.findChildNode((childNode) => {
      const childNodeJudgementNode = isNodeJudgementNode(childNode);

      if (childNodeJudgementNode) {
        return true;
      }
    }) || null;

    return judgementNode;
  }

  getMetavariableNode() {
    const metavariableNode = this.findChildNode((childNode) => {
      const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

      if (childNodeMetavariableNode) {
        return true;
      }
    }) || null;

    return metavariableNode;
  }

  getTypeAssertionNode() {
    const typeAssertionNode = this.findChildNode((childNode) => {
      const childNodeTypeAssertionNode = isNodeTypeAssertionNode(childNode);

      if (childNodeTypeAssertionNode) {
        return true;
      }
    }) || null;

    return typeAssertionNode;
  }

  getSubproofAssertionNode() {
    const subproofAssertionNode = this.findChildNode((childNode) => {
      const childNodeSubproofAssertionNode = isNodeSubproofAssertionNode(childNode);

      if (childNodeSubproofAssertionNode) {
        return true;
      }
    }) || null;

    return subproofAssertionNode;
  }

  getPropertyAssertionNode() {
    const propertyAssertionNode = this.findChildNode((childNode) => {
      const childNodePropertyAssertionNode = isNodePropertyAssertionNode(childNode);

      if (childNodePropertyAssertionNode) {
        return true;
      }
    }) || null;

    return propertyAssertionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
