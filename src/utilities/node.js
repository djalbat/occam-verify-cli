"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { TYPE_RULE_NAME,
         LABEL_RULE_NAME,
         VARIABLE_RULE_NAME,
         META_TYPE_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME,
         UNQUALIFIED_METASTATEMENT_RULE_NAME } from "../ruleNames";
import { labelTokensFromLabelString,
         constructorDeclarationTokensFromTermString,
         variableDeclarationTokensFromVariableString,
         unqualifiedStatementTokensFromStatementString,
         metavariableDeclarationTokensFromMetavariableString,
         unqualifiedMetastatementTokensFromMetastatementString } from "../utilities/tokens";

const { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      typeNodeQuery = nodeQuery("/variableDeclaration/type!"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable!"),
      metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export function termNodeFromTermString(termString, lexer, parser) {
  const constructorDeclarationTokens = constructorDeclarationTokensFromTermString(termString, parser),
        termNode = termNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser);

  return termNode;
}

export function labelNodeFromLabelString(labelString, lexer, parser) {
  const labelTokens = labelTokensFromLabelString(labelString, lexer),
        labelNode = labelNodeFromLabelTokens(labelTokens, parser);

  return labelNode;
}

export function typeNodeFromVariableString(variableString, lexer, parser) {
  const variableDeclarationTokens = variableDeclarationTokensFromVariableString(variableString, lexer),
        typeNode = typeNodeFromVariableVariableDeclarationTokens(variableDeclarationTokens, parser);

  return typeNode;
}

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

export function metaTypeNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableDeclarationTokens = metavariableDeclarationTokensFromMetavariableString(metavariableString, lexer),
        metaTypeNode = metaTypeNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser);

  return metaTypeNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableDeclarationTokens = metavariableDeclarationTokensFromMetavariableString(metavariableString, lexer),
        metavariableNode = metavariableNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser);

  return metavariableNode;
}

export function metastatementNodeFromMetastatementString(metastatementString, lexer, parser) {
  const unqualifiedMetastatementTokens = unqualifiedMetastatementTokensFromMetastatementString(metastatementString, lexer),
        metastatementNode = metastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser);

  return metastatementNode;
}

export function termNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser) {
  const constructorDeclarationNode = constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser),
        termNode = termNodeQuery(constructorDeclarationNode);

  return termNode;
}

export function statementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  const unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function typeNodeFromVariableVariableDeclarationTokens(variableDeclarationTokens, parser) {
  const typeDeclarationNode = typeDeclarationNodeFromVariableDeclarationTokens(variableDeclarationTokens, parser),
        typeNode = typeNodeQuery(typeDeclarationNode);

  return typeNode;
}

export function metaTypeNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser) {
  const metaTypeDeclarationNode = metaTypeDeclarationNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser),
        metaTypeNode = metaTypeNodeQuery(metaTypeDeclarationNode);

  return metaTypeNode;
}

export function metavariableNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser) {
  const metavariableDeclarationNode = metavariableDeclarationNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser),
        metavariableNode = metavariableNodeQuery(metavariableDeclarationNode);

  return metavariableNode;
}

export function variableNodeFromVariableVariableTDeclarationTokens(variableTDeclarationTokens, parser) {
  const variableDeclarationNode = variableDeclarationNodeFromVariableTDeclarationTokens(variableTDeclarationTokens, parser),
        variableNode = variableNodeQuery(variableDeclarationNode);

  return variableNode;
}

export function metastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser) {
  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeFromUnqualifiedMetastatementTokens(unqualifiedMetastatementTokens, parser),
        metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  return metastatementNode;
}

export function labelNodeFromLabelTokens(labelTokens, parser) {
  const ruleName = LABEL_RULE_NAME,
        labelNode = nodeFromTokensRuleNameAndParser(labelTokens, ruleName, parser);

  return labelNode;
}

export function typeDeclarationNodeFromVariableDeclarationTokens(variableDeclarationTokens, parser) {
  const ruleName = TYPE_RULE_NAME,
        typeDeclarationNode = nodeFromTokensRuleNameAndParser(variableDeclarationTokens, ruleName, parser);

  return typeDeclarationNode;
}

export function variableDeclarationNodeFromVariableTDeclarationTokens(variableTDeclarationTokens, parser) {
  const ruleName = VARIABLE_RULE_NAME,
        variableDeclarationNode = nodeFromTokensRuleNameAndParser(variableTDeclarationTokens, ruleName, parser);

  return variableDeclarationNode;
}

export function unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  const ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        unqualifiedStatementNode = nodeFromTokensRuleNameAndParser(unqualifiedStatementTokens, ruleName, parser);

  return unqualifiedStatementNode;
}

export function metaTypeDeclarationNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser) {
  const ruleName = META_TYPE_RULE_NAME,
        metaTypeDeclarationNode = nodeFromTokensRuleNameAndParser(metavariableDeclarationTokens, ruleName, parser);

  return metaTypeDeclarationNode;
}

export function constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser) {
  const ruleName = CONSTRUCTOR_DECLARATION_RULE_NAME,
        constructorDeclarationNode = nodeFromTokensRuleNameAndParser(constructorDeclarationTokens, ruleName, parser);

  return constructorDeclarationNode;
}

export function metavariableDeclarationNodeFromMetavariableDeclarationTokens(metavariableDeclarationTokens, parser) {
  const ruleName = METAVARIABLE_RULE_NAME,
        metavariableDeclarationNode = nodeFromTokensRuleNameAndParser(metavariableDeclarationTokens, ruleName, parser);

  return metavariableDeclarationNode;
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
