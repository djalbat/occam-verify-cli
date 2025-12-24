"use strict";

import AxiomLemmaTheoremConjectureNode from "../node/axiomLemmaTheoremConjecture";

import { THEOREM_BODY_RULE_NAME, THEOREM_HEADER_RULE_NAME } from "../ruleNames";

export default class TheoremNode extends AxiomLemmaTheoremConjectureNode {
  static bodyRuleName = THEOREM_BODY_RULE_NAME;

  static headerRuleName = THEOREM_HEADER_RULE_NAME;

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AxiomLemmaTheoremConjectureNode.fromRuleNameChildNodesOpacityAndPrecedence(TheoremNode, ruleName, childNodes, opacity, precedence); }
}
