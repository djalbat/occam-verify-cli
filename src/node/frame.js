"use strict";

import { NonTerminalNode } from "occam-furtle";

import { ASSUMPTION_RULE_NAME, METAVARIABLE_RULE_NAME } from "../ruleNames";

export default class FrameNode extends NonTerminalNode {
  isSingular() {
    let singular = false;

    const singularAssumptionNode = this.getSingularAssumptionNode();

    if (singularAssumptionNode !== null) {
      singular = singularAssumptionNode.isSingular();
    }

    return singular;
  }

  getMetavariableName() {
    let metavariableName = null;

    const metavariableNode = this.getMetavariableNode();

    if (metavariableNode !== null) {
      metavariableName = metavariableNode.getMetavariableName();
    }

    return metavariableName;
  }

  getMetavariableNode() {
    const singularMetavariableNode = this.getSingularMetavariableNode(),
          metavariableNode = singularMetavariableNode;  ///

    return metavariableNode;
  }

  getSingularMetavariableNode() {
    let singularMetavariableNode = null;

    const singularAssumptionNode = this.getSingularAssumptionNode();

    if (singularAssumptionNode !== null) {
      const metavariableNode = singularAssumptionNode.getMetavariableNode();

      singularMetavariableNode = metavariableNode;  ///
    }

    return singularMetavariableNode;
  }

  getAssumptionNodes() {
    const ruleName = ASSUMPTION_RULE_NAME,
          declarationNodes = this.getNodesByRuleName(ruleName);

    return declarationNodes;
  }

  getMetavariableNodes() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNodes = this.getNodesByRuleName(ruleName);

    return metavariableNodes;
  }

  getSingularAssumptionNode() {
    const ruleName = ASSUMPTION_RULE_NAME,
          singularAssumptionNode = this.getSingularNodeByRuleName(ruleName);

    return singularAssumptionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence); }
}
