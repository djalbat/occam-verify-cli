"use strict";

import { arrayUtilities } from "necessary";
import { lexersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { front } = arrayUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);

export function variableTokensFromVariableString(variableString, lexer) {
  const variableContent = `${variableString}`,
        variableTokens = tokensFromContentAndLexer(variableContent, lexer);

  return variableTokens;
}

export function metavariableTokensFromMetavariableString(metavariableString, lexer) {
  const metavariableContent = `${metavariableString}`,
        metavariableTokens = tokensFromContentAndLexer(metavariableContent, lexer);

  return metavariableTokens;
}

export function unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer) {
  const content = unqualifiedStatementString,  ///
        unqualifiedStatementTokens = tokensFromContentAndLexer(content, lexer);

  return unqualifiedStatementTokens;
}

export function constructorDeclarationTokensFromConstructorDeclarationString(constructorDeclarationString, lexer) {
  const content = constructorDeclarationString,  ///
        constructorDeclarationTokens = tokensFromContentAndLexer(content, lexer);

  return constructorDeclarationTokens;
}

export function termTokensFromConstructorDeclarationTokens(constructorDeclarationTokens) {
  const frontConstructorDeclarationTokens = front(constructorDeclarationTokens),
        termTokens = frontConstructorDeclarationTokens;  ///

  return termTokens;
}

export function statementTokensFromUnqualifiedStatementTokens(unqualifiedStatementTokens) {
  const frontUnqualifiedStatementTokens = front(unqualifiedStatementTokens),
        statementTokens = frontUnqualifiedStatementTokens;  ///

  return statementTokens;
}

function tokensFromContentAndLexer(content, lexer = nominalLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
