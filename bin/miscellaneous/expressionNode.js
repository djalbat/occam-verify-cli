"use strict";

const parsers = require("occam-parsers");

const ruleNames = require("../miscellaneous/ruleNames");

const { NonTerminalNode } = parsers,
      { EXPRESSION_RULE_NAME } = ruleNames;

class ExpressionNode extends NonTerminalNode {
  static fromNonTerminalNode(nonTerminalNode) {
    const ruleName = EXPRESSION_RULE_NAME,
          parentNode = undefined,
          childNodes = [
            nonTerminalNode
          ],
          expressionNode = new ExpressionNode(ruleName, parentNode, childNodes);

    return expressionNode;
  }
}

module.exports = ExpressionNode;
