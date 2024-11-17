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

  static fromStringAndPartialContext(Class, string, PartialContext) {
    const lexer = nominalLexer, ///
          parser = nominalParser, ///
          partialContext = PartialContext.fromStringLexerAndParser(string, lexer, parser),
          node = partialContext.getNode(),
          tokens = partialContext.getTokens(),
          bracketedContext = new Class(string, node, tokens);

    return bracketedContext;
  }
}
