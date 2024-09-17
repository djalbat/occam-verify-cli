"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { UNQUALIFIED_STATEMENT_RULE_NAME, CONSTRUCTOR_DECLARATION_RULE_NAME } from "../ruleNames";
import { constructorDeclarationTokensFromTermString, unqualifiedStatementTokensFromStatementString } from "../utilities/tokens";

const { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export function termNodeFromTermString(termString, lexer, parser) {
  const constructorDeclarationTokens = constructorDeclarationTokensFromTermString(termString, lexer),
        termNode = termNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser);

  return termNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const unqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(statementString, lexer),
        statementNode = statementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

  return statementNode;
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

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = florenceParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
