'use strict';

const ruleUtilities = require('../utilities/rule'),
      verifyWithRule = require('../verify/withRule');

const { findRuleByName } = ruleUtilities;

function verifyExpression(expressionNode, context, rules) {
  const expressionRule = findRuleByName('expression', rules),
        node = expressionNode,  ///
        rule = expressionRule,  ///
        verified = verifyWithRule(node, rule, context, rules);

  return verified;
}

module.exports = verifyExpression;
