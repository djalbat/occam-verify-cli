"use strict";

import shim from "../shim";
import Constructor from "../constructor";

import { OBJECT_TYPE_NAME } from "../typeNames";
import { stringFromTermAndType } from "../constructor";
import { nominalLexer, nominalParser } from "../utilities/nominal";
import { termTokensFromConstructorDeclarationTokens, constructorDeclarationTokensFromConstructorDeclarationString } from "../utilities/tokens";
import { termNodeFromConstructorDeclarationNode,
         constructorDeclarationStringFromTermString,
         constructorDeclarationNodeFromConstructorDeclarationTokens } from "../utilities/node";

const lexer = nominalLexer, ///
      parser = nominalParser, ///
      termString = `(${OBJECT_TYPE_NAME})`,  ///
      constructorDeclarationString = constructorDeclarationStringFromTermString(termString),
      constructorDeclarationTokens = constructorDeclarationTokensFromConstructorDeclarationString(constructorDeclarationString, lexer),
      constructorDeclarationNode = constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser),
      termNode = termNodeFromConstructorDeclarationNode(constructorDeclarationNode),
      termTokens = termTokensFromConstructorDeclarationTokens(constructorDeclarationTokens),
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
        nodeAsTokens,
        nodeAsString,
        tokensAsString
      };

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
