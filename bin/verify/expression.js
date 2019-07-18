'use strict';

const ruleUtilities = require('../utilities/rule');

const { findRuleByName } = ruleUtilities;

function verifyExpression(expressionNode, context, rules) {
  let type = undefined;

  const expressionRule = findRuleByName('expression', rules),
        node = expressionNode,  ///
        rule = expressionRule;  ///

  debugger
}

module.exports = verifyExpression;
