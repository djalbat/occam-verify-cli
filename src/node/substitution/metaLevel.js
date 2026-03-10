"use strict";

import SubstitutionNode from "../../node/substitution";

import { STATEMENT_RULE_NAME, REFERENCE_RULE_NAME } from "../../ruleNames";

export default class MetaLevelSubstitutionNode extends SubstitutionNode {
  getTargetReferenceNode() {
    const referenceNode = this.getReferenceNode(),
          targetReferenceNode = referenceNode; ///

    return targetReferenceNode;
  }

  getReplacementStatementNode() {
    const statementNode = this.getStatementNode(),
          replacementStatementNode = statementNode; ///

    return replacementStatementNode;
  }

  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getFirstNodeByRuleName(ruleName);

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return SubstitutionNode.fromRuleNameChildNodesOpacityAndPrecedence(MetaLevelSubstitutionNode, ruleName, childNodes, opacity, precedence); }
}
