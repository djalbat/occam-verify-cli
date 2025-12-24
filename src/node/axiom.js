"use strict";

import AxiomLemmaTheoremConjectureNode from "../node/axiomLemmaTheoremConjecture";

import { AXIOM_BODY_RULE_NAME, AXIOM_HEADER_RULE_NAME } from "../ruleNames";

export default class AxiomNode extends AxiomLemmaTheoremConjectureNode {
  static bodyRuleName = AXIOM_BODY_RULE_NAME;

  static headerRuleName = AXIOM_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AxiomLemmaTheoremConjectureNode.fromRuleNameChildNodesOpacityAndPrecedence(AxiomNode, ruleName, childNodes, opacity, precedence); }
}
