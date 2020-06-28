"use strict";

const parsers = require("occam-parsers");

const ruleNames = require("../miscellaneous/ruleNames");

const { TERM_RULE_NAME } = ruleNames,
      { NonTerminalNode } = parsers;

class TermNode extends NonTerminalNode {
  static fromNonTerminalNode(nonTerminalNode) {
    const ruleName = TERM_RULE_NAME,
          parentNode = undefined,
          childNodes = [
            nonTerminalNode
          ],
          termNode = new TermNode(ruleName, parentNode, childNodes);

    return termNode;
  }
}

module.exports = TermNode;
