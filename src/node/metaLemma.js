"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { META_LEMMA_BODY_RULE_NAME, META_LEMMA_HEADER_RULE_NAME } from "../ruleNames";

export default class MetaLemmaNode extends NonTerminalNode {
  getMetaLemmaBodyNode() {
    const ruleName = META_LEMMA_BODY_RULE_NAME,
          metaLemmaBodyNode = this.getNodeByRuleName(ruleName);

    return metaLemmaBodyNode;
  }

  getMetaLemmaHeaderNode() {
    const ruleName = META_LEMMA_HEADER_RULE_NAME,
          metaLemmaHeaderNode = this.getNodeByRuleName(ruleName);

    return metaLemmaHeaderNode;
  }

  getLabelNode() {
    const metaLemmaHeaderNode = this.getMetaLemmaHeaderNode(),
          labelNode = metaLemmaHeaderNode.getLabelNode();

    return labelNode;
  }

  getSuppositionNodes() {
    const metaLemmaBodyNode = this.getMetaLemmaBodyNode(),
          suppositionNodes = metaLemmaBodyNode.getSuppositionNodes();

    return suppositionNodes;
  }

  getDeductionNode() {
    const metaLemmaBodyNode = this.getMetaLemmaBodyNode(),
          deductionNode = metaLemmaBodyNode.getDeductionNode();

    return deductionNode;
  }

  getProofNode() {
    const metaLemmaBodyNode = this.getMetaLemmaBodyNode(),
          proofNode = metaLemmaBodyNode.getProofNode();

    return proofNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(MetaLemmaNode, ruleName, childNodes, opacity, precedence); }
}
