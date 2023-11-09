"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { TYPE_RULE_NAME,
         LABEL_RULE_NAME,
         VARIABLE_RULE_NAME,
         META_TYPE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";

import { combinedCustomGrammarFromNothing } from "./customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      typeNodeQuery = nodeQuery("/variableDeclaration/type!"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable!"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

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

export function termNodeFromTermString(termString, lexer, parser) {
  const ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
        constructorDeclarationTokens = constructorDeclarationTokensFromTermString(termString, lexer, parser),
        constructorDeclarationNode = nodeFromTokensRuleNameAndParser(constructorDeclarationTokens, ruleName, parser),
        termNode = termNodeQuery(constructorDeclarationNode);

  return termNode;
}

export function labelNodeFromLabelString(labelString, lexer, parser) {
  const ruleName = LABEL_RULE_NAME,
        labelTokens = labelTokensFromLabelString(labelString, lexer),
        labelNode = nodeFromTokensRuleNameAndParser(labelTokens, ruleName, parser);

  return labelNode;
}

export function typeNodeFromVariableString(variableString, lexer, parser) {
  const ruleName = TYPE_RULE_NAME,
        variableDeclarationTokens = variableDeclarationTokensFromVariableString(variableString, lexer),
        typeDeclarationNode = nodeFromTokensRuleNameAndParser(variableDeclarationTokens, ruleName, parser),
        typeNode = typeNodeQuery(typeDeclarationNode);

  return typeNode;
}

export function variableNodeFromVariableString(variableString, lexer, parser) {
  const ruleName = VARIABLE_RULE_NAME,
        variableTDeclarationTokens = variableDeclarationTokensFromVariableString(variableString, lexer),
        variableDeclarationNode = nodeFromTokensRuleNameAndParser(variableTDeclarationTokens, ruleName, parser),
        variableNode = variableNodeQuery(variableDeclarationNode);

  return variableNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        unqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(statementString, lexer),
        unqualifiedStatementNode = nodeFromTokensRuleNameAndParser(unqualifiedStatementTokens, ruleName, parser),
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function metaTypeNodeFromMetavariableString(metavariableString, lexer, parser) {
  const ruleName = META_TYPE_RULE_NAME,
        metavariableDeclarationTokens = metavariableDeclarationTokensFromMetavariableString(metavariableString, lexer),
        metaTypeDeclarationNode = nodeFromTokensRuleNameAndParser(metavariableDeclarationTokens, ruleName, parser),
        metaTypeNode = metaTypeNodeQuery(metaTypeDeclarationNode);

  return metaTypeNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const ruleName = METAVARIABLE_RULE_NAME,
        metavariableDeclarationTokens = metavariableDeclarationTokensFromMetavariableString(metavariableString, lexer),
        metavariableDeclarationNode = nodeFromTokensRuleNameAndParser(metavariableDeclarationTokens, ruleName, parser),
        metavariableNode = metavariableNodeQuery(metavariableDeclarationNode);

  return metavariableNode;
}

export function metastatementNodeFromMetastatementString(metastatementString, lexer, parser) {
  const ruleName = UNQUALIFIED_METASTATEMENT_RULE_NAME,
        unqualifiedMetastatementTokens = unqualifiedMetastatementTokensFromMetastatementString(metastatementString, lexer),
        unqualifiedMetastatementNode = nodeFromTokensRuleNameAndParser(unqualifiedMetastatementTokens, ruleName, parser),
        metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  return metastatementNode;
}

function tokensFromContentAndLexer(content, lexer = florenceLexer) {
  const tokens = lexer.tokenise(content);

  return tokens;
}

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = florenceParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
