"use strict";

const { NonTerminalNode } = require("occam-parsers");

const { EXPRESSION_RULE_NAME } = require("../constants");

class Expression extends NonTerminalNode {
  static fromNonTerminalNode(nonTerminalNode) {
    const ruleName = EXPRESSION_RULE_NAME,
          parentNode = undefined,
          childNodes = [
            nonTerminalNode
          ],
          expressionNode = new Expression(ruleName, parentNode, childNodes);

    return expressionNode;
  }
}

module.exports = Expression;
