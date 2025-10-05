"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { TERM_RULE_NAME,
         FRAME_RULE_NAME,
         EQUALITY_RULE_NAME,
         JUDGEMENT_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         META_ARGUMENT_RULE_NAME,
         TYPE_ASSERTION_RULE_NAME,
         DEFINED_ASSERTION_RULE_NAME,
         TERM_SUBSTITUTION_RULE_NAME,
         PROPERTY_ASSERTION_RULE_NAME,
         SUBPROOF_ASSERTION_RULE_NAME,
         FRAME_SUBSTITUTION_RULE_NAME,
         SATISFIES_ASSERTION_RULE_NAME,
         CONTAINED_ASSERTION_RULE_NAME,
         STATEMENT_SUBSTITUTION_RULE_NAME } from "../ruleNames";

export default class StatementNode extends NonTerminalNode {
  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getDescendantNodesByRuleName(ruleName);

    return termNodes;
  }

  getFrameNodes() {
    const ruleName = FRAME_RULE_NAME,
          frameNodes = this.getDescendantNodesByRuleName(ruleName);

    return frameNodes;
  }

  getEqualityNode() {
    const ruleName = EQUALITY_RULE_NAME,
          equalityNode = this.getNodeByRuleName(ruleName);

    return equalityNode;
  }

  getJudgementNode() {
    const ruleName = JUDGEMENT_RULE_NAME,
          judgementNode = this.getNodeByRuleName(ruleName);

    return judgementNode;
  }

  getMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          metavariableNode = this.getNodeByRuleName(ruleName);

    return metavariableNode;
  }

  getTypeAssertionNode() {
    const ruleName = TYPE_ASSERTION_RULE_NAME,
          typeAssertionNode = this.getNodeByRuleName(ruleName);

    return typeAssertionNode;
  }

  getDefinedAssertionNode() {
    const ruleName = DEFINED_ASSERTION_RULE_NAME,
          definedAssertionNode = this.getNodeByRuleName(ruleName);

    return definedAssertionNode;
  }

  getTermSubstitutionNode() {
    const ruleName = TERM_SUBSTITUTION_RULE_NAME,
          termSubstitutionNode = this.getNodeByRuleName(ruleName);

    return termSubstitutionNode;
  }

  getFrameSubstitutionNode() {
    const ruleName = FRAME_SUBSTITUTION_RULE_NAME,
          frameSubstitutionNode = this.getNodeByRuleName(ruleName);

    return frameSubstitutionNode;
  }

  getSubproofAssertionNode() {
    const ruleName = SUBPROOF_ASSERTION_RULE_NAME,
          subproofAssertionNode = this.getNodeByRuleName(ruleName);

    return subproofAssertionNode;
  }

  getPropertyAssertionNode() {
    const ruleName = PROPERTY_ASSERTION_RULE_NAME,
          propertyAssertionNode = this.getNodeByRuleName(ruleName);

    return propertyAssertionNode;
  }

  getSingularStatementNode() {
    let singularStatementNode = null;

    const singularMetaArgumentNode = this.getSingularMetaArgumentNode();

    if (singularMetaArgumentNode !== null) {
      singularStatementNode = singularMetaArgumentNode.getSingularStatementNode();
    }

    return singularStatementNode;
  }

  getContainedAssertionNode() {
    const ruleName = CONTAINED_ASSERTION_RULE_NAME,
          containedAssertionNode = this.getNodeByRuleName(ruleName);

    return containedAssertionNode;
  }

  getSatisfiedAssertionNode() {
    const ruleName = SATISFIES_ASSERTION_RULE_NAME,
          satisfiedAssertionNode = this.getNodeByRuleName(ruleName);

    return satisfiedAssertionNode;
  }

  getSingularMetavariableNode() {
    const ruleName = METAVARIABLE_RULE_NAME,
          singularMetavariableNode = this.getSingularTNodeByRuleName(ruleName);

    return singularMetavariableNode;
  }

  getSingularMetaArgumentNode() {
    const ruleName = META_ARGUMENT_RULE_NAME,
          singularMetaArgumentNode = this.getNodeByRuleName(ruleName);

    return singularMetaArgumentNode;
  }

  getStatementSubstitutionNode() {
    const ruleName = STATEMENT_SUBSTITUTION_RULE_NAME,
          statementSubstitutionNode = this.getNodeByRuleName(ruleName);

    return statementSubstitutionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
