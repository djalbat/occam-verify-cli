"use strict";

const { loggingUtilities } = require("necessary");

const MetaproofContext = require("../context/metaproof"),
      verifyInferenceConditionalRule = require("../verify/inferenceConditionalRule"),
      verifyUnqualifiedMetastatementRule = require("../verify/unqualifiedMetastatementRule");

const { nodesQuery } = require("../utilities/query"),
      { nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' rule...`);

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const inferenceConditionalRuleVerified = verifyInferenceConditionalRule(ruleNode, context),
        unqualifiedMetastatementRuleVerified = verifyUnqualifiedMetastatementRule(ruleNode, context);

  if (inferenceConditionalRuleVerified || unqualifiedMetastatementRuleVerified) {
    debugger
  }

  return ruleVerified;
}

module.exports = verifyRule;
