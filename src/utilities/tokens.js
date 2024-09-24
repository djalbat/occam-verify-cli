"use strict";

import { lexersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

export function termTokensFromTermString(termString, lexer) {
  const content = termString, ///
        termTokens = tokensFromContentAndLexer(content, lexer);

  return termTokens;
}

export function statementTokensFromStatementString(statementString, lexer) {
  const content = statementString,  ///
        statementTokens = tokensFromContentAndLexer(content, lexer);

  return statementTokens;
}

function tokensFromContentAndLexer(content, lexer = florenceLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
