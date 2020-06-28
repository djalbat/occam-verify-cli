"use strict";

const ruleNames = require("../miscellaneous/ruleNames"),
      verifyRule = require("../verify/rule");

const { STATEMENT_RULE_NAME } = ruleNames;

function verifyStatementAsOperator(statementNode, fileContext) {
	const statementRule = fileContext.findRuleByRuleName(STATEMENT_RULE_NAME),
			  nonTerminalNode = statementNode,  ///
			  rule = statementRule,  ///
			  verified = verifyRule(rule, nonTerminalNode, fileContext);

	return verified;
}

module.exports = verifyStatementAsOperator;
