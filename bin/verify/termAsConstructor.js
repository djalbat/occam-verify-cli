"use strict";

const verifyRule = require("../verify/rule"),
			ruleNames = require("../miscellaneous/ruleNames");

const { TERM_RULE_NAME } = ruleNames;

function verifyTermAsConstructor(termNode, fileContext) {
	const termRule = fileContext.findRuleByRuleName(TERM_RULE_NAME),
			  nonTerminalNode = termNode,  ///
			  rule = termRule,  ///
			  verified = verifyRule(rule, nonTerminalNode, fileContext);

	return verified;
}

module.exports = verifyTermAsConstructor;
