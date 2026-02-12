"use strict";

import { Context, nodeUtilities } from "occam-languages";
import { lexersUtilities, parsersUtilities } from "occam-nominal";

import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";

const { nominalLexerFromNothing } = lexersUtilities,
      { nominalParserFromNothing } = parsersUtilities,
      { nodeAsString, nodesAsString } = nodeUtilities;

const nominalLexer = nominalLexerFromNothing(NominalLexer),
      nominalParser = nominalParserFromNothing(NominalParser);

export default class LiteralContext extends Context {
  constructor(context, lexer, parser, tokens) {
    super(context);

    this.lexer = lexer;
    this.parser = parser;
    this.tokens = tokens;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getTokens() {
    return this.tokens;
  }

  setLexer(lexer) {
    this.lexer = lexer;
  }

  setParser(parser) {
    this.parser = parser;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  static fromNothing() {
    const context = null,
          lexer = nominalLexer, ///
          parser = nominalParser, ///
          tokens = null,
          literalContext = new LiteralContext(context, lexer, parser, tokens);

    return literalContext;
  }
}
