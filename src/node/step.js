"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { NONSENSE_RULE_NAME, STATEMENT_RULE_NAME, QUALIFICATION_RULE_NAME } from "../ruleNames";

export default class StepNode extends NonTerminalNode {
  isStepNode() {
    const stepNode = true;

    return stepNode;
  }

  isSubproofNode() {
    const subproofNode = false;

    return subproofNode;
  }

  getNonsenseNode() {
    const ruleName = NONSENSE_RULE_NAME,
          nonsenseNode = this.getNodeByRuleName(ruleName);

    return nonsenseNode;
  }

  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  getQualificationNode() {
    const ruleName = QUALIFICATION_RULE_NAME,
          qualificationNode = this.getNodeByRuleName(ruleName);

    return qualificationNode;
  }

  getReferenceNode() {
    let referenceNode = null;

    const qualificationNode = this.getQualificationNode();

    if (qualificationNode !== null) {
      referenceNode = qualificationNode.getReferenceNode();
    }

    return referenceNode;
  }

  getSatisfiedAssertionNode() {
    let satisfiedAssertionNode =  null;

    const qualificationNode = this.getQualificationNode();

    if (qualificationNode !== null) {
      satisfiedAssertionNode = qualificationNode.getSatisfiedAssertionNode();
    }

    return satisfiedAssertionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
