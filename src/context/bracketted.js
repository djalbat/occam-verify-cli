"use strict";

import { nominalLexer, nominalParser } from "../utilities/nominal";

export default class BracketedContext {
  constructor(string, node, tokens) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  nodeAsTokens() {
    return this.tokens;
  }

  nodeAsString() {
    return this.string;
  }

  tokensAsString() {
    return this.string;
  }

  static fromStringAndNodeAndTokens(Class, string, NodeAndTokens) {
    const context = { ///
            getLexer,
            getParser
          },
          nodeAndTokens = NodeAndTokens.fromString(string, context),
          node = nodeAndTokens.getNode(),
          tokens = nodeAndTokens.getTokens(),
          bracketedContext = new Class(string, node, tokens);

    return bracketedContext;
  }
}

function getLexer() {
  const lexer = nominalLexer; //'

  return lexer;
}

function getParser() {
  const parser = nominalParser; //'

  return parser;
}

