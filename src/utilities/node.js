"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { TERM_RULE_NAME,
         METAVARIABLE_RULE_NAME,
         UNQUALIFIED_STATEMENT_RULE_NAME,
         CONSTRUCTOR_DECLARATION_RULE_NAME } from "../ruleNames";
import { metavariableTokensFromMetavariableString,
         unqualifiedStatementTokensFromUnqualifiedStatementString,
         constructorDeclarationTokensFromConstructorDeclarationString } from "../utilities/tokens";

const { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);

const termNodeQuery = nodeQuery("/constructorDeclaration/term"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export function termNodeFromTermString(termString, lexer, parser) {
  const constructorDeclarationString = `Constructor ${termString}
`,
        constructorDeclarationTokens = constructorDeclarationTokensFromConstructorDeclarationString(constructorDeclarationString, lexer),
        constructorDeclarationNode = constructorDeclarationNodeFromConstructorDeclarationTokens(constructorDeclarationTokens, parser),
        termNode = termNodeQuery(constructorDeclarationNode, constructorDeclarationNode);

  return termNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const unqualifiedStatementString = `${statementString}
`,
        unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
        unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
        statementNode = statementNodeQuery(unqualifiedStatementNode);

  return statementNode;
}

export function metavariableNodeFromMetavariableString(metavariableString, lexer, parser) {
  const metavariableTokens = metavariableTokensFromMetavariableString(metavariableString, lexer),
        metavariableNode = metavariableNodeFromMetavariableTokens(metavariableTokens, parser);

  return metavariableNode;
}

export function unqualifiedStatementNodeFromUnqualifiedStatementString(unqualifiedStatementString, lexer, parser) {
  const unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
        unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser);

  return unqualifiedStatementNode;
}

export function termNodeFromTermTokens(termTokens, parser) {
  const tokens = termTokens,  ///
        ruleName = TERM_RULE_NAME,
        termNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return termNode;
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

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = nominalParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
