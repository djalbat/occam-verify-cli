"use strict";

import BracketedContext from "../../context/bracketted";
import TermPartialContext from "../../context/partial/term";

import { BASE_TYPE_SYMBOL } from "../../constants";
import { nominalLexer, nominalParser } from "../../utilities/nominal";

class ConstructorBracketedContext extends BracketedContext {
  getBracketedTermNode() {
    const node = this.getNode(),
          bracketedTermNode = node;  ///

    return bracketedTermNode;
  }

  static fromNothing() {
    const string = `(${BASE_TYPE_SYMBOL})`,
          lexer = nominalLexer, ///
          parser = nominalParser, ///
          termPartialContext = TermPartialContext.fromStringLexerAndParser(string, lexer, parser),
          context = termPartialContext,
          constructorBracketedContext = BracketedContext.fromString(ConstructorBracketedContext, string, context);

    return constructorBracketedContext;
  }
}

const constructorBracketedContext = ConstructorBracketedContext.fromNothing();

export default constructorBracketedContext;
