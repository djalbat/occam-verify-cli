"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { REFERENCE_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

export default class StepNode extends NonTerminalNode {
  isStepNode() {
    const stepNode = true;

    return stepNode;
  }

  isSubproofNode() {
    const subproofNode = false;

    return subproofNode;
  }

  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
