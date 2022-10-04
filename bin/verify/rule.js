"use strict";

const { loggingUtilities } = require("necessary");

const verifyMetaproof = require("../verify/metaproof"),
      MetaproofContext = require("../context/metaproof"),
      verifyInferenceConditionalRule = require("../verify/rule/inferenceConditional"),
      verifyUnqualifiedMetastatementRule = require("../verify/rule/unqualifiedMetastatement");

const { first } = require("../utilities/array"),
      { nodesAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      metaproofNodeQuery = nodeQuery("/rule/metaproof!");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' rule...`);

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const rules = [],
        inferenceConditionalRuleVerified = verifyInferenceConditionalRule(ruleNode, rules, context),
        unqualifiedMetastatementRuleVerified = verifyUnqualifiedMetastatementRule(ruleNode, rules, context);

  if (inferenceConditionalRuleVerified || unqualifiedMetastatementRuleVerified) {
    const metaproofNode = metaproofNodeQuery(ruleNode);

    let metaproofVerified = true;

    if (metaproofNode !== null) {
      metaproofVerified = verifyMetaproof(metaproofNode, rules, context);
    }

    if (metaproofVerified) {
      ruleVerified = true;
    }
  }

  if (ruleVerified) {
    const firstRule = first(rules),
          rule = firstRule; ///

    context.addRule(rule);

    log.info(`Verified the '${labelsString}' rule.`);
  }

  return ruleVerified;
}

module.exports = verifyRule;
