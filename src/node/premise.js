"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { STATEMENT_RULE_NAME, PROCEDURE_CALL_RULE_NAME } from "../ruleNames";

export default class PremiseNode extends NonTerminalNode {
  getStatementNode() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNode = this.getNodeByRuleName(ruleName);

    return statementNode;
  }

  getProcedureCallNode() {
    const ruleName = PROCEDURE_CALL_RULE_NAME,
          procedureCallNode = this.getNodeByRuleName(ruleName);

    return procedureCallNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PremiseNode, ruleName, childNodes, opacity, precedence); }
}
