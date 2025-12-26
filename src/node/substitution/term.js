"use strict";

import SubstitutionNode from "../../node/substitution";

import { TERM_RULE_NAME } from "../../ruleNames";

export default class TermSubstitutionNode extends SubstitutionNode {
  getLastTermNode() {
    const ruleName = TERM_RULE_NAME,
          lastTermNode = this.getLastNodeByRuleName(ruleName);

    return lastTermNode;
  }

  getFirstTermNode() {
    const ruleName = TERM_RULE_NAME,
          firstTermNode = this.getFirstNodeByRuleName(ruleName);

    return firstTermNode;
  }

  getLastVariableNode() {
    const lastTermNode = this.getLastTermNode(),
          singularVariableNode = lastTermNode.getSingularVariableNode(),
          lastVariableNode = singularVariableNode;  ///

    return lastVariableNode;
  }

  getFirstVariableNode() {
    const firstTermNode = this.getFirstTermNode(),
          singularVariableNode = firstTermNode.getSingularVariableNode(),
          firstVariableNode = singularVariableNode;  ///

    return firstVariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return SubstitutionNode.fromRuleNameChildNodesOpacityAndPrecedence(TermSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
