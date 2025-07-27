"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStatementNode } from "../utilities/node";

export default class ConclusionNode extends NonTerminalNode {
  getStatementNode() {
    const statementNode = this.findChildNode((childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        return true;
      }
    }) || null;

    return statementNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConclusionNode, ruleName, childNodes, opacity, precedence); }
}
