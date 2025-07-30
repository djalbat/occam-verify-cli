"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { isNodeStatementNode } from "../../utilities/node";

export default class ContainedDeclarationNode extends NonTerminalNode {
  getStatementNode() {
    const statementNode = this.findChildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ContainedDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
