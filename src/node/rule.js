"use strict";

import NonTerminalNode from "../node/nonTerminal";

import {RULE_BODY_RULE_NAME, RULE_HEADER_RULE_NAME} from "../ruleNames";

export default class RuleNode extends NonTerminalNode {
  getRuleBodyNode() {
    const ruleName = RULE_BODY_RULE_NAME,
          ruleBodyNode = this.getNodeByRuleName(ruleName);

    return ruleBodyNode;
  }

  getRuleHeaderNode() {
    const ruleName = RULE_HEADER_RULE_NAME,
          ruleHeaderNode = this.getNodeByRuleName(ruleName);

    return ruleHeaderNode;
  }

  getLabelNodes() {
    const ruleHeaderNode = this.getRuleHeaderNode(),
          labelNodes = ruleHeaderNode.getLabelNodes();

    return labelNodes;
  }

  getPremiseNodes() {
    const ruleBodyNode = this.getRuleBodyNode(),
          premiseNodes = ruleBodyNode.getPremiseNodes();

    return premiseNodes;
  }

  getConclusionNode() {
    const ruleBodyNode = this.getRuleBodyNode(),
          conclusionNode = ruleBodyNode.getConclusionNode();

    return conclusionNode;
  }

  getProofNode() {
    const ruleBodyNode = this.getRuleBodyNode(),
          proofNode = ruleBodyNode.getProofNode();

    return proofNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(RuleNode, ruleName, childNodes, opacity, precedence); }
}
