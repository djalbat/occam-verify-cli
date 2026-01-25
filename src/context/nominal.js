"use strict";

import { nominalLexer, nominalParser } from "../utilities/nominal";

class NominalContext {
  constructor(lexer, parser) {
    this.lexer = lexer;
    this.parser = parser;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getFileContext() {
    const fileContext = null;

    return fileContext;
  }

  getDepth() {
    const depth = -1;

    return depth;
  }

  static fromNothing() {
    const lexer = nominalLexer, ///
          parser = nominalParser, ///
          nominalContext = new NominalContext(lexer, parser);

    return nominalContext;
  }
}

const nominalContext = NominalContext.fromNothing();

export default nominalContext;
