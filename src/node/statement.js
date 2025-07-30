"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeTermNode,
         isNodeFrameNode,
         isNodeEqualityNode,
         isNodeJudgementNode,
         isNodeMetavariableNode,
         isNodeTypeAssertionNode,
         isNodeDefinedAssertionNode,
         isNodeSubproofAssertionNode,
         isNodePropertyAssertionNode,
         isNodeSatisfiesAssertionNode,
         isNodeContainedAssertionNode } from "../utilities/node";

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

  getDefinedAssertionNode() {
    const definedAssertionNode = this.findChildNode((childNode) => {
      const definedAssertionNode = isNodeDefinedAssertionNode(childNode);

      if (definedAssertionNode) {
        return true;
      }
    }) || null;

    return definedAssertionNode;
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

  getContainedAssertionNode() {
    const containedAssertionNode = this.findChildNode((childNode) => {
      const containedAssertionNode = isNodeContainedAssertionNode(childNode);

      if (containedAssertionNode) {
        return true;
      }
    }) || null;

    return containedAssertionNode;
  }

  getSatisfiedAssertionNode() {
    const satisfiedAssertionNode = this.findChildNode((childNode) => {
      const childNodeSatisfiedAssertionNode = isNodeSatisfiesAssertionNode(childNode);

      if (childNodeSatisfiedAssertionNode) {
        return true;
      }
    }) || null;

    return satisfiedAssertionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
