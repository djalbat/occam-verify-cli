"use strict";

import { nodeQuery } from "../utilities/query";
import { VARIABLE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME } from "../ruleNames";
import { variableTokensFromVariableString,
         metavariableTokensFromMetavariableString,
         constructorDeclarationTokensFromConstructorDeclarationString } from "../utilities/tokens";

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      substitutionNodeQuery = nodeQuery("/unqualifiedStatement/statement/substitution");

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

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableTokens = metavariableTokensFromMetavariableString(metavariableString, lexer),
        metavariableNode = metavariableNodeFromMetavariableTokens(metavariableTokens, parser);

  return metavariableNode;
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

export function unqualifiedStatementStringFromSubstitutionString(substitutionString) {
  const unqualifiedStatementString = `a ${substitutionString}
`;  ///

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

export function substitutionNodeFromUnqualifiedStatementNode(unqualifiedStatementNode) {
  const substitutionNode = substitutionNodeQuery(unqualifiedStatementNode);

  return substitutionNode;
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

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
