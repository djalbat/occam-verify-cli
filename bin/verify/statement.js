"use strict";

const Error = require("../error"),
      ruleNames = require("../miscellaneous/ruleNames"),
      nodeUtilities = require("../utilities/node");

const { nodeAsString } = nodeUtilities,
      { STATEMENT_RULE_NAME } = ruleNames;

function verifyStatement(statementNode, fileContext) {
  // const statementRule = fileContext.findRuleByRuleName(STATEMENT_RULE_NAME),
  //       nonTerminalNode = statementNode,  ///
  //       rule = statementRule,  ///
  //       type = verifyWithRule(nonTerminalNode, rule, fileContext);
  //
  // if (type === undefined) {
  //   const node = statementNode,  ///
  //         statementString = nodeAsString(statementNode),
  //         message = `The statement '${statementString}' cannot be verified.`;
  //
  //   throw new Error(node, message);
  // }
  //
  // return type;
}

module.exports = verifyStatement;
