"use strict";

import Node from "../../node";

export default class ContainedDeclarationNode extends Node {
  getStatementNode() {
    const statementNode = this.fromSecondChildNode((secondChildNode) => {
      const statementNode = secondChildNode;  ///

      return statementNode;
    });

    return statementNode;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(ContainedDeclarationNode, ruleName, childNodes, opacity); }
}
