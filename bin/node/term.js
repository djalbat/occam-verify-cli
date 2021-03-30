"use strict";

const { NonTerminalNode } = require("occam-parsers");

const { TERM_RULE_NAME } = require("../constants");

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
