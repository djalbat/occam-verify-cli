"use strict";

import { lexersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities;

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

export function substitutionTokensFromSubstitutionString(substitutionString, lexer) {
  const substitutionContent = `${substitutionString}`,
        substitutionTokens = tokensFromContentAndLexer(substitutionContent, lexer);

  return substitutionTokens;
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

function tokensFromContentAndLexer(content, lexer = nominalLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
