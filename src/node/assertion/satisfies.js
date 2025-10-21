"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { SIGNATURE_RULE_NAME, SIMPLE_REFERENCE_RULE_NAME } from "../../ruleNames";

export default class SatisfiesAssertionNode extends NonTerminalNode {
  getSignatureNode() {
    const ruleName = SIGNATURE_RULE_NAME,
          signatureNode = this.getNodeByRuleName(ruleName);

    return signatureNode;
  }

  getSimpleReferenceNode() {
    const ruleName = SIMPLE_REFERENCE_RULE_NAME,
          simpleReferenceNode = this.getNodeByRuleName(ruleName);

    return simpleReferenceNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SatisfiesAssertionNode, ruleName, childNodes, opacity, precedence); }
}
