"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { unqualifiedStatementTokensFromStatementString } from "../utilities/tokens";
import { UNQUALIFIED_STATEMENT_RULE_NAME, CONSTRUCTOR_DECLARATION_RULE_NAME } from "../ruleNames";

const { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term!"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const unqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(statementString, lexer),
        statementNode = statementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

  return statementNode;
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
