"use strict";

const parsers = require("occam-parsers");

const constants = require("../constants");

const { TERM_RULE_NAME } = constants,
      { NonTerminalNode } = parsers;

class Term extends NonTerminalNode {
  static fromNonTerminalNode(nonTerminalNode) {
    const ruleName = TERM_RULE_NAME,
          parentNode = undefined,
          childNodes = [
            nonTerminalNode
          ],
          termNode = new Term(ruleName, parentNode, childNodes);

    return termNode;
  }
}

module.exports = Term;
