"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeStatementNode, isNodeProcedureCallNode } from "../utilities/node";

export default class PremiseNode extends NonTerminalNode {
  getStatementNode() {
    const statementNode = this.findChildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  getProcedureCallNode() {
    const procedureCallNode = this.findChildNode((childNode) => {
      const childNodeProcedureCallNode = isNodeProcedureCallNode(childNode);

      if (childNodeProcedureCallNode) {
        return true;
      }
    }) || null;

    return procedureCallNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PremiseNode, ruleName, childNodes, opacity, precedence); }
}
