"use strict";

import { lexersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

export function labelTokensFromLabelString(labelString, lexer) {
  const labelContent = `${labelString}`,
        labelTokens = tokensFromContentAndLexer(labelContent, lexer);

  return labelTokens;
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

export function metavariableDeclarationTokensFromMetavariableString(metavariableString, lexer) {
  const metavariableDeclarationContent = `Metavariable ${metavariableString}
`,
        metavariableDeclarationTokens = tokensFromContentAndLexer(metavariableDeclarationContent, lexer);

  return metavariableDeclarationTokens;
}

export function unqualifiedMetastatementTokensFromMetastatementString(metastatementString, lexer) {
  const unqualifiedMetastatementContent = `${metastatementString}
`,
        unqualifiedMetastatementTokens = tokensFromContentAndLexer(unqualifiedMetastatementContent, lexer);

  return unqualifiedMetastatementTokens;
}

function tokensFromContentAndLexer(content, lexer = florenceLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}
