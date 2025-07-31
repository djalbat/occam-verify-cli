"use strict";

import NonTerminalNode from "../node/nonTerminal";

import {  PROOF_RULE_NAME, PREMISE_RULE_NAME, CONCLUSION_RULE_NAME, PARENTHESISED_LABELS_RULE_NAME } from "../ruleNames";

export default class RuleNode extends NonTerminalNode {
  getLabelNodes() {
    const parenthesisedLabelsNode = this.getParenthesisedLabelsNode(),
          labelNodes = parenthesisedLabelsNode.getLabelNodes();

    return labelNodes;
  }

  getProofNode() {
    const ruleName = PROOF_RULE_NAME,
          proofNode = this.getNodeByRuleName(ruleName);

    return proofNode;
  }

  getPremiseNodes() {
    const ruleName = PREMISE_RULE_NAME,
          premiseNodes = this.getNodesByRuleName(ruleName);

    return premiseNodes;
  }

  getConclusionNode() {
    const ruleName = CONCLUSION_RULE_NAME,
          conclusionNode = this.getNodeByRuleName(ruleName);

    return conclusionNode;
  }

  getParenthesisedLabelsNode() {
    const ruleName = PARENTHESISED_LABELS_RULE_NAME,
          parenthesisedLabelsNode = this.getNodeByRuleName(ruleName);

    return parenthesisedLabelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence); }
}
