'use strict';

const ruleUtilities = require('../utilities/rule'),
      verifyWithRule = require('../verify/withRule');

const { findRuleByName } = ruleUtilities;

function verifyTermAsConstructor(termNode, context, rules) {
  const termRule = findRuleByName('term', rules),
        node = termNode,  ///
        rule = termRule,  ///
        verified = verifyWithRule(node, rule, context, rules);

  return verified;
}

module.exports = verifyTermAsConstructor;
