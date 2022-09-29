"use strict";

const { loggingUtilities } = require("necessary");

const verifyUnqualifiedStatementRule = require("../verify/unqualifiedStatementRule"),
      verifyIndicativeConditionalRule = require("../verify/indicativeConditionalRule");

const { nodesQuery } = require("../utilities/query"),
      { nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' rule...`);

  const unconditionalRuleVerified = verifyIndicativeConditionalRule(ruleNode, context);

  if (unconditionalRuleVerified) {
    ruleVerified = true;
  } else {
    const conditionalRuleVerified = verifyUnqualifiedStatementRule(ruleNode, context);

    if (conditionalRuleVerified) {
      ruleVerified = true;
    }
  }

  return ruleVerified;
}

module.exports = verifyRule;
