"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { PROOF_RULE_NAME, DEDUCTION_RULE_NAME, SUPPOSITION_RULE_NAME } from "../ruleNames";

export default class BodyNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
