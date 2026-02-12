"use strict";

import { nodeUtilities } from "occam-languages";
import { lexersUtilities, parsersUtilities } from "occam-nominal";

import Context from "../context";
import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";

const { nominalLexerFromNothing } = lexersUtilities,
      { nominalParserFromNothing } = parsersUtilities,
      { nodeAsString, nodesAsString } = nodeUtilities;

const nominalLexer = nominalLexerFromNothing(NominalLexer),
      nominalParser = nominalParserFromNothing(NominalParser); ///

class NominalContext extends Context {
  constructor(context, lexer, parser) {
    super(context);

    this.lexer = lexer;
    this.parser = parser;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
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
          nominalContext = Context.fromNothing(NominalContext, lexer, parser, context);

    return nominalContext;
  }
}

const nominalContext = NominalContext.fromNothing();

export default nominalContext;
