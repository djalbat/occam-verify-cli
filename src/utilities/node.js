"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";
import { termTokensFromTermString, statementTokensFromStatementString } from "../utilities/tokens";

const { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

export function termNodeFromTermString(termString, lexer, parser) {
  const termTokens = termTokensFromTermString(termString, lexer),
        termNode = termNodeFromTermTokens(termTokens, parser);

  return termNode;
}

export function statementNodeFromStatementString(statementString, lexer, parser) {
  const statementTokens = statementTokensFromStatementString(statementString, lexer),
        statementNode = statementNodeFromStatementTokens(statementTokens, parser);

  return statementNode;
}

export function termNodeFromTermTokens(termTokens, parser) {
  const tokens = termTokens,  ///
        ruleName = TERM_RULE_NAME,
        termNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return termNode;
}

export function statementNodeFromStatementTokens(statementTokens, parser) {
  const tokens = statementTokens,  ///
        ruleName = STATEMENT_RULE_NAME,
        statementNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return statementNode;
}

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = florenceParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
