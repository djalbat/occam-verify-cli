"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      MetaproofContext = require("../context/metaproof"),
      verifyConditionalInference = require("../verify/conditinalInference"),
      verifyUnconditionalInference = require("../verify/unconditionalInference");

const { first } = require("../utilities/array"),
      { nodesAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      conditionalInferenceNodeQuery = nodeQuery("/rule/conditionalInference!"),
      unconditionalInferenceNodeQuery = nodeQuery("/rule/unconditionalInference!");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' rule...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    const metaproofContext = MetaproofContext.fromContext(context);

    context = metaproofContext; ///

    const premises = [],
          conclusions = [],
          conditionalInferenceNode = conditionalInferenceNodeQuery(ruleNode),
          unconditionalInferenceNode = unconditionalInferenceNodeQuery(ruleNode);

    if (conditionalInferenceNode !== null) {
      const conditionalInferenceVerified = verifyConditionalInference(ruleNode, premises, conclusions, context);

      ruleVerified = conditionalInferenceVerified;  ///
    }

    if (unconditionalInferenceNode !== null) {
      const unconditionalInferenceVerified = verifyUnconditionalInference(ruleNode, premises, conclusions, context);

      ruleVerified = unconditionalInferenceVerified;  ///
    }

    if (ruleVerified) {
      const firstConclusion = first(conclusions),
            conclusion = firstConclusion, ///
            rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

      context.addRule(rule);

      log.info(`Verified the '${labelsString}' rule.`);
    }
  }

  return ruleVerified;
}

module.exports = verifyRule;
