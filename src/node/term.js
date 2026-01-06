"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { ARGUMENT_RULE_NAME, VARIABLE_RULE_NAME } from "../ruleNames";

export default class TermNode extends NonTerminalNode {
  getVariableIdentifier() {
    let variableIdentifier = null;

    const singular = this.isSingular();

    if (singular) {
      const singularVariableNode = this.getSingularVariableNode();

      variableIdentifier = singularVariableNode.getVariableIdentifier();
    }

    return variableIdentifier;
  }

  getVariableNode() {
    const singularVariableNode = this.getSingularVariableNode(),
          variableNode = singularVariableNode;  //

    return variableNode;
  }

  isSingular() {
    let singular = false;

    const singularVariableNode = this.getSingularVariableNode();

    if (singularVariableNode !== null) {
      singular = true;
    }

    return singular;
  }

  getVariableNodes() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNodes = this.getNodesByRuleName(ruleName);

    return variableNodes;
  }

  getSingularTermNode() {
    let singularTermNode = null;

    const singularArgumentNode = this.getSingularArgumentNode();

    if (singularArgumentNode !== null) {
      singularTermNode = singularArgumentNode.getSingularTermNode();
    }

    return singularTermNode;
  }

  getSingularArgumentNode() {
    const ruleName = ARGUMENT_RULE_NAME,
          singularArgumentNode = this.getSingularNodeByRuleName(ruleName);

    return singularArgumentNode;
  }

  getSingularVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          singularVariableNode = this.getSingularNodeByRuleName(ruleName);

    return singularVariableNode;
  }

  getSingularVariableIdentifier() {
    let singularVariableIdentifier = null;

    const singularVariableNode = this.getSingularVariableNode();

    if (singularVariableNode !== null) {
      const variableIdentifier = singularVariableNode.getVariableIdentifier();

      singularVariableIdentifier = variableIdentifier;  ///
    }

    return singularVariableIdentifier;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}
