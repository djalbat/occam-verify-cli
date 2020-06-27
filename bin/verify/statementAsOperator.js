"use strict";

const parsers = require("occam-parsers");

const Error = require("../error"),
			queries = require("../miscellaneous/queries"),
			ruleNames = require("../miscellaneous/ruleNames"),
      ParserContext = require("../context/parser"),
      verifyUtilities = require("../utilities/verify"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { partTypes } = parsers,
      { verifyTerm } = verifyUtilities,
      { nameTerminalNodeQuery } = queries,
      { RuleNamePartType,
        OptionalPartPartType,
        GroupOfPartsPartType,
        ChoiceOfPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType } = partTypes,
      { NAME_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } = ruleNames;

function verifyStatementAsOperator(statementNode, context, ruleMap) {
	const statementRule = ruleMap[STATEMENT_RULE_NAME],
			  nonTerminalNode = statementNode,  ///
			  rule = statementRule,  ///
			  verified = verifyWithRule(nonTerminalNode, rule, context, ruleMap);

	return verified;
}

module.exports = verifyStatementAsOperator;
