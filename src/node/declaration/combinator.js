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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ContainedDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
