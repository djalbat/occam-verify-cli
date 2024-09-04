"use strict";

import { lexersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

export function metavariableTokensFromMetavariableString(metavariableString, lexer) {
  const metavariableContent = `${metavariableString}`,
        metavariableTokens = tokensFromContentAndLexer(metavariableContent, lexer);

  return metavariableTokens;
}

export function constructorDeclarationTokensFromTermString(termString, lexer) {
  const constructorDeclarationContent = `Constructor ${termString}
`,
        constructorDeclarationTokens = tokensFromContentAndLexer(constructorDeclarationContent, lexer);

  return constructorDeclarationTokens;
}

export function variableDeclarationTokensFromVariableString(variableString, lexer) {
  const variableDeclarationContent = `Variable ${variableString}
`,
        variableDeclarationTokens = tokensFromContentAndLexer(variableDeclarationContent, lexer);

  return variableDeclarationTokens;
}

export function unqualifiedStatementTokensFromStatementString(statementString, lexer) {
  const unqualifiedStatementContent = `${statementString}
`,
        unqualifiedStatementTokens = tokensFromContentAndLexer(unqualifiedStatementContent, lexer);

  return unqualifiedStatementTokens;
}

function tokensFromContentAndLexer(content, lexer = florenceLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
