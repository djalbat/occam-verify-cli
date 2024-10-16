"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { VARIABLE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         SUBSTITUTION_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME } from "../ruleNames";
import { variableTokensFromVariableString,
         metavariableTokensFromMetavariableString,
         substitutionTokensFromSubstitutionString,
         unqualifiedStatementTokensFromUnqualifiedStatementString,
         constructorDeclarationTokensFromConstructorDeclarationString } from "../utilities/tokens";

const { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export function termNodeFromTermString(termString, lexer, parser) {
  const constructorDeclarationString = constructorDeclarationStringFromTermString(termString),
        constructorDeclarationTokens = constructorDeclarationTokensFromConstructorDeclarationString(constructorDeclarationString, lexer),
        constructorDeclarationNode = constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser),
        termNode = termNodeFromConstructorDeclarationNode(constructorDeclarationNode);

  return termNode;
}

export function variableNodeFromVariableString(variableString, lexer, parser) {
  const variableTokens = variableTokensFromVariableString(variableString, lexer),
        variableNode = variableNodeFromVariableTokens(variableTokens, parser);

  return variableNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const unqualifiedStatementString =unqualifiedStatementStringFromStatementString(statementString),
        unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
        unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
        statementNode = statementNodeFromUnqualifiedStatementNode(unqualifiedStatementNode);

  return statementNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableTokens = metavariableTokensFromMetavariableString(metavariableString, lexer),
        metavariableNode = metavariableNodeFromMetavariableTokens(metavariableTokens, parser);

  return metavariableNode;
}

export function substitutionNodeFromSubstitutionString(substitutionString, lexer, parser) {
  const substitutionTokens = substitutionTokensFromSubstitutionString(substitutionString, lexer),
        substitutionNode = substitutionNodeFromSubstitutionTokens(substitutionTokens, parser);

  return substitutionNode;
}

export function constructorDeclarationStringFromTermString(termString) {
  const constructorDeclarationString = `Constructor ${termString}
`;

  return constructorDeclarationString;
}

export function unqualifiedStatementStringFromStatementString(statementString) {
  const unqualifiedStatementString = `${statementString}
`;

  return unqualifiedStatementString;
}

export function termNodeFromConstructorDeclarationNode(constructorDeclarationNode) {
  const termNode = termNodeQuery(constructorDeclarationNode, constructorDeclarationNode);

  return termNode;
}

export function statementNodeFromUnqualifiedStatementNode(unqualifiedStatementNode) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function variableNodeFromVariableTokens(variableTokens, parser) {
  const ruleName = VARIABLE_RULE_NAME,
        variableNode = nodeFromTokensRuleNameAndParser(variableTokens, ruleName, parser);

  return variableNode;
}

export function metavariableNodeFromMetavariableTokens(metavariableTokens, parser) {
  const ruleName = METAVARIABLE_RULE_NAME,
        metavariableNode = nodeFromTokensRuleNameAndParser(metavariableTokens, ruleName, parser);

  return metavariableNode;
}

export function substitutionNodeFromSubstitutionTokens(substitutionTokens, parser) {
  const ruleName = SUBSTITUTION_RULE_NAME,
        substitutionNode = nodeFromTokensRuleNameAndParser(substitutionTokens, ruleName, parser);

  return substitutionNode;
}

export function unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  const tokens = unqualifiedStatementTokens,  ///
        ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        unqualifiedStatementNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return unqualifiedStatementNode;
}

export function constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser) {
  const tokens = constructorDeclarationTokens,  ///
        ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
        constructorDeclarationNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return constructorDeclarationNode;
}

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = nominalParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
