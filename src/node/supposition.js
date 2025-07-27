"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStatementNode, isNodeProcedureCallNode } from "../utilities/node";

export default class SuppositionNode extends NonTerminalNode {
  getStatementNode() {
    const statementNode = this.findChiildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  getProcedureCallNode() {
    const procedureCallNode = this.findChiildNode((childNode) => {
      const childNodeProcedureCallNode = isNodeProcedureCallNode(childNode);

      if (childNodeProcedureCallNode) {
        return true;
      }
    }) || null;

    return procedureCallNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SuppositionNode, ruleName, childNodes, opacity, precedence); }
}
