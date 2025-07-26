"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStatementNode } from "../../utilities/node";

export default class SubproofAssertionNode extends NonTerminalNode {
  getStatementNodes() {
    const statementNodes = this.reduceChildNode((statementNodes, childNode) => {
      const childNodeStatementNode = isNodeStatementNode(childNode);

      if (childNodeStatementNode) {
        const statementNode = childNode;  ///

        statementNodes.push(statementNode);
      }

      return statementNodes;
    }, []);

    return statementNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofAssertionNode, ruleName, childNodes, opacity, precedence); }
}
