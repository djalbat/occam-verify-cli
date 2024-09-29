"use strict";

import { parsersUtilities } from "occam-custom-grammars";

import { nodeQuery } from "../utilities/query";
import { combinedCustomGrammarFromNothing } from "./customGrammar";
import { TERM_RULE_NAME, UNQUALIFIED_STATEMENT_RULE_NAME } from "../ruleNames";
import { termTokensFromTermString, unqualifiedStatementTokensFromUnqualifiedStatementString } from "../utilities/tokens";

const { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export function termNodeFromTermString(termString, lexer, parser) {
  const termTokens = termTokensFromTermString(termString, lexer),
        termNode = termNodeFromTermTokens(termTokens, parser);

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

export function termNodeFromTermTokens(termTokens, parser) {
  const tokens = termTokens,  ///
        ruleName = TERM_RULE_NAME,
        termNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return termNode;
}

export function unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser) {
  const tokens = unqualifiedStatementTokens,  ///
        ruleName = UNQUALIFIED_STATEMENT_RULE_NAME,
        unqualifiedStatementNode = nodeFromTokensRuleNameAndParser(tokens, ruleName, parser);

  return unqualifiedStatementNode;
}

function nodeFromTokensRuleNameAndParser(tokens, ruleName, parser = nominalParser) {
  const ruleMap = parser.getRuleMap(),
        rule = ruleMap[ruleName],
        node = parser.parse(tokens, rule);

  return node;
}
