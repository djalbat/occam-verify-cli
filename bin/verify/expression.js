'use strict';

const Error = require('../error'),
      nodeUtilities = require('../utilities/node'),
      ruleUtilities = require('../utilities/rule');

const { nodeAsString } = nodeUtilities,
      { findRuleByName } = ruleUtilities;

function verifyExpression(expressionNode, context, rules) {
  Object.assign(context, { verifyExpression }); ///

  const expressionRule = findRuleByName('expression', rules),
        node = expressionNode,  ///
        rule = expressionRule,  ///
        type = verifyStatementOrExpression(node, rule, context, rules);

  if (type === undefined) {
    const node = expressionNode,  ///
          expressionString = nodeAsString(expressionNode),
          message = `The expression '${expressionString}' cannot be verified.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyExpression;
