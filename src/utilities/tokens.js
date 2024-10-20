"use strict";

import { arrayUtilities } from "necessary";

const { front } = arrayUtilities;

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

export function substitutionTokensFromUnqualifiedStatementTokensAndSubstitutionNode(unqualifiedStatementTokens, substitutionNode) {
  const lastSignificantTokenIndex = substitutionNode.getLastSignificantTokenIndex(unqualifiedStatementTokens),
        firstSignificantTokenIndex = substitutionNode.getFirstSignificantTokenIndex(unqualifiedStatementTokens),
        start = firstSignificantTokenIndex, ///
        end = lastSignificantTokenIndex + 1,
        substitutionTokens = unqualifiedStatementTokens.slice(start, end);

  return substitutionTokens;
}

function tokensFromContentAndLexer(content, lexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
