"use strict";

import AxiomLemmaTheoremConjectureNode from "../node/axiomLemmaTheoremConjecture";

import { CONJECTURE_BODY_RULE_NAME, CONJECTURE_HEADER_RULE_NAME } from "../ruleNames";

export default class ConjectureNode extends AxiomLemmaTheoremConjectureNode {
  static bodyRuleName = CONJECTURE_BODY_RULE_NAME;

  static headerRuleName = CONJECTURE_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AxiomLemmaTheoremConjectureNode.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence); }
}
