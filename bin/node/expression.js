"use strict";

const parsers = require("occam-parsers");

const ruleNames = require("../ruleNames");

const { NonTerminalNode } = parsers,
      { EXPRESSION_RULE_NAME } = ruleNames;

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
