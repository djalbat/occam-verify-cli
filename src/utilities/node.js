"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { METAVARIABLE_RULE_NAME,
         VARIABLE_DECLARATION_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";
import { metavariableTokensFromMetavariableString,
         variableDeclarationTokensFromVariableString,
         unqualifiedStatementTokensFromStatementString,
         unqualifiedMetastatementTokensFromMetastatementString } from "../utilities/tokens";

const { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export function variableNodeFromVariableString(variableString, lexer, parser) {
  const variableTDeclarationTokens = variableDeclarationTokensFromVariableString(variableString, lexer),
        variableNode = variableNodeFromVariableVariableTDeclarationTokens(variableTDeclarationTokens, parser);

  return variableNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const unqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(statementString, lexer),
        statementNode = statementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

  return statementNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableTokens = metavariableTokensFromMetavariableString(metavariableString, lexer),
        metavariableNode = metavariableNodeFromMetavariableTokens(metavariableTokens, parser);

  return metavariableNode;
}

export function metastatementNodeFromMetastatementString(metastatementString, lexer, parser) {
  const unqualifiedMetastatementTokens = unqualifiedMetastatementTokensFromMetastatementString(metastatementString, lexer),
        metastatementNode = metastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser);

  return metastatementNode;
}

export function termNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser) {
  let termNode = null;

  const constructorDeclarationNode = constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser);

  if (constructorDeclarationNode !== null) {
    termNode = termNodeQuery(constructorDeclarationNode);
  }

  return termNode;
}

export function statementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  let statementNode = null;

  const unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

  if (unqualifiedStatementNode !== null) {
    statementNode = statementNodeQuery(unqualifiedStatementNode);
  }

  return statementNode;
}

export function variableNodeFromVariableVariableTDeclarationTokens(variableTDeclarationTokens, parser) {
  let variableNode = null;

  const variableDeclarationNode = variableDeclarationNodeFromVariableTDeclarationTokens(variableTDeclarationTokens, parser);

  if (variableDeclarationNode !== null) {
    variableNode = variableNodeQuery(variableDeclarationNode);
  }

  return variableNode;
}

export function metastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser) {
  let metastatementNode = null;

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser);

  if (unqualifiedMetastatementNode !== null) {
    metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);
  }

  return metastatementNode;
}

export function metavariableNodeFromMetavariableTokens(metavariableTokens, parser) {
  const ruleName = METAVARIABLE_RULE_NAME,
        metavariableNode = nodeFromTokensRuleNameAndParser(metavariableTokens, ruleName, parser);

  return metavariableNode;
}

export function variableDeclarationNodeFromVariableTDeclarationTokens(variableTDeclarationTokens, parser) {
  const ruleName = VARIABLE_DECLARATION_RULE_NAME,
        variableDeclarationNode = nodeFromTokensRuleNameAndParser(variableTDeclarationTokens, ruleName, parser);

  return variableDeclarationNode;
}

export function unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        unqualifiedStatementNode = nodeFromTokensRuleNameAndParser(unqualifiedStatementTokens, ruleName, parser);

  return unqualifiedStatementNode;
}

export function constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser) {
  const ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
        constructorDeclarationNode = nodeFromTokensRuleNameAndParser(constructorDeclarationTokens, ruleName, parser);

  return constructorDeclarationNode;
}

export function unqualifiedMetastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser) {
  const ruleName = UNQUALIFIED_METASTATEMENT_RULE_NAME,
        unqualifiedMetastatementNode = nodeFromTokensRuleNameAndParser(unqualifiedMetastatementTokens, ruleName, parser);

  return unqualifiedMetastatementNode;
}

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = florenceParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
