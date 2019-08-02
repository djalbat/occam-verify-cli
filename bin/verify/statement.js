'use strict';

const Error = require('../error'),
      queries = require('../miscellaneous/queries'),
      nodeUtilities = require('../utilities/node'),
      ruleUtilities = require('../utilities/rule'),
      verifyEquality = require('../verify/equality'),
      verifyStatementOrExpression = require('../verify/statementOrExpression');

const { nodeAsString } = nodeUtilities,
      { findRuleByName } = ruleUtilities,
      { equalityNodeQuery } = queries;

function verifyStatement(statementNode, context, rules) {
  let verified = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== undefined) {
    verified = verifyEquality(equalityNode, context, rules);
  } else {
    const statementRule = findRuleByName('statement', rules),
          node = statementNode, ///
          rule = statementRule, ///
          type = verifyStatementOrExpression(node, rule, context, rules);

    verified = (type !== undefined);
  }

  if (!verified) {
    const node = statementNode,  ///
          statementString = nodeAsString(statementNode),
          message = `The statement '${statementString}' cannot be verified.`;

    throw new Error(node, message);
  }
}

module.exports = verifyStatement;
