"use strict";

const Error = require("../error"),
      ruleNames = require("../miscellaneous/ruleNames"),
      nodeUtilities = require("../utilities/node"),
      verifyUtilities = require("../utilities/verify");

const { nodeAsString } = nodeUtilities,
      { verifyWithRule } = verifyUtilities,
      { EXPRESSION_RULE_NAME } = ruleNames;

function verifyExpression(expressionNode, fileContext) {
  const expressionRule = fileContext.findRuleByRuleName(EXPRESSION_RULE_NAME),
        nonTerminalNode = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyWithRule(nonTerminalNode, rule, fileContext);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The expression '${expressionString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyExpression;
