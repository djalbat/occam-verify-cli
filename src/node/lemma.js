"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { LEMMA_BODY_RULE_NAME, LEMMA_HEADER_RULE_NAME } from "../ruleNames";

export default class LemmaNode extends NonTerminalNode {
  getLemmaBodyNode() {
    const ruleName = LEMMA_BODY_RULE_NAME,
          lemmaBodyNode = this.getNodeByRuleName(ruleName);

    return lemmaBodyNode;
  }

  getLemmaHeaderNode() {
    const ruleName = LEMMA_HEADER_RULE_NAME,
          lemmaHeaderNode = this.getNodeByRuleName(ruleName);

    return lemmaHeaderNode;
  }

  getLabelNodes() {
    const lemmaHeaderNode = this.getLemmaHeaderNode(),
          labelNodes = lemmaHeaderNode.getLabelNodes();

    return labelNodes;
  }

  getSuppositionNodes() {
    const lemmaBodyNode = this.getLemmaBodyNode(),
          suppositionNodes = lemmaBodyNode.getSuppositionNodes();

    return suppositionNodes;
  }

  getDeductionNode() {
    const lemmaBodyNode = this.getLemmaBodyNode(),
          deductionNode = lemmaBodyNode.getDeductionNode();

    return deductionNode;
  }

  getProofNode() {
    const lemmaBodyNode = this.getLemmaBodyNode(),
          proofNode = lemmaBodyNode.getProofNode();

    return proofNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence); }
}
