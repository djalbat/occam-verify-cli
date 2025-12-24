"use strict";

import AxiomLemmaTheoremConjectureNode from "../node/axiomLemmaTheoremConjecture";

import { LEMMA_BODY_RULE_NAME, LEMMA_HEADER_RULE_NAME } from "../ruleNames";

export default class LemmaNode extends AxiomLemmaTheoremConjectureNode {
  static bodyRuleName = LEMMA_BODY_RULE_NAME;

  static headerRuleName = LEMMA_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AxiomLemmaTheoremConjectureNode.fromRuleNameChildNodesOpacityAndPrecedence(LemmaNode, ruleName, childNodes, opacity, precedence); }
}
