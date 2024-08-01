"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { TERM_RULE_NAME } from "./ruleNames";

const { florenceLexerFromNothing } = lexersUtilities,
      { florenceParserFromNothing } = parsersUtilities;

const florenceLexer = florenceLexerFromNothing(),
      florenceParser = florenceParserFromNothing();

export default class Term {
  constructor(node, type) {
    this.node = node;
    this.type = type;
  }

  getNode() {
    return this.node;
  }

  getType() {
    return this.type;
  }

  match(term) {
    const node = term.getNode(),
          matches = this.node.match(node);

    return matches;
  }

  static fromVariable(variable, context) {
    const variableNode = variable.getNode(),
          termNode = termNodeFromVariableNode(variableNode, context),
          node = termNode,  ///
          type = variable.getType(),
          term = new Term(node, type);

    return term;
  }

  static fromTermNodeAndType(termNode, type) {
    const node = termNode,  ///
          term = new Term(node, type);

    return term;
  }
}

function termNodeFromVariableNode(variableNode, context) {
  const variableString = context.nodeAsString(variableNode),
        content = variableString, ///
        lexer = florenceLexer,  ///
        parser = florenceParser,  ///
        ruleMap = parser.getRuleMap(),
        startRuleName = TERM_RULE_NAME, ///
        startRule = ruleMap[startRuleName],
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens, startRule),
        termNode = node;  ///

  return termNode;
}