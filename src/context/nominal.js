"use strict";

import { Context, contextUtilities } from "occam-furtle";
import { nominalLexer, nominalParser } from "../utilities/nominal";

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

  static fromNothing() {
    const lexer = nominalLexer, ///
          parser = nominalParser, ///
          nominalContext = new NominalContext(lexer, parser);

    return nominalContext;
  }
}

const nominalContext = NominalContext.fromNothing();

export default nominalContext;
