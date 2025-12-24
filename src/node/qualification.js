"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { REFERENCE_RULE_NAME, SATISFIES_ASSERTION_RULE_NAME } from "../ruleNames";

export default class QualificationNode extends NonTerminalNode {
  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  getSatisfiedAssertionNode() {
    const ruleName = SATISFIES_ASSERTION_RULE_NAME,
          satisfiedAssertionNode = this.getNodeByRuleName(ruleName);

    return satisfiedAssertionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(QualificationNode, ruleName, childNodes, opacity, precedence); }
}
