"use strict";

import shim from "../shim";
import Constructor from "../constructor";
import TermNodeAndTokens from "../nodeAndTokens/term";

import { OBJECT_TYPE_NAME } from "../typeNames";
import { stringFromTermAndType } from "../constructor";
import { nominalLexer, nominalParser } from "../utilities/nominal";

const getLexer = () => {
        const lexer = nominalLexer; ///

        return lexer;
      },
      getParser = () => {
        const parser = nominalParser; ///

        return parser;
      },
      nodeAsTokens = (node) => {
        const tokens = termTokens; ///

        return tokens;
      },
      nodeAsString = (node) => {
        const string = termString;  ///

        return string;
      },
      tokensAsString = (tokens) => {
        const string = termNode;  ///

        return string;
      },
      context = {
        getLexer,
        getParser,
        nodeAsTokens,
        nodeAsString,
        tokensAsString
      },
      string = `(${OBJECT_TYPE_NAME})`,
      termNodeAndTokens = TermNodeAndTokens.fromString(string, context),
      termTokens = termNodeAndTokens.getTermTokens(),
      termNode = termNodeAndTokens.getTermNode();

export const bracketedTermNode = termNode;  ///

export default class BracketedConstructor extends Constructor {
  static fromNothing() {
    const { Term } = shim,
          term = Term.fromTermNode(termNode, context),
          type = null,
          string = stringFromTermAndType(term, type),
          bracketedConstructor = new BracketedConstructor(string, term);

    return bracketedConstructor;
  }
}
