"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      verifyMetaproof = require("../verify/metaproof"),
      MetaproofContext = require("../context/metaproof"),
      verifyConditionalInference = require("../verify/conditinalInference"),
      verifyUnconditionalInference = require("../verify/unconditionalInference");

const { first } = require("../utilities/array"),
      { nodesAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      metaproofNodeQuery = nodeQuery("/rule/metaproof!"),
      conditionalInferenceNodeQuery = nodeQuery("/rule/conditionalInference!"),
      unconditionalInferenceNodeQuery = nodeQuery("/rule/unconditionalInference!");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  log.debug(`Verifying the '${labelsString}' rule...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    const premises = [],
          conclusions = [],
          conditionalInferenceNode = conditionalInferenceNodeQuery(ruleNode),
          unconditionalInferenceNode = unconditionalInferenceNodeQuery(ruleNode);

    let conditionalInferenceVerified = false,
        unconditionalInferenceVerified = false;

    if (conditionalInferenceNode !== null) {
      conditionalInferenceVerified = verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context);
    }

    if (unconditionalInferenceNode !== null) {
      unconditionalInferenceVerified = verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context);
    }

    if (conditionalInferenceVerified || unconditionalInferenceVerified) {
      const metaproofNode = metaproofNodeQuery(ruleNode),
            firstConclusion = first(conclusions),
            conclusion = firstConclusion; ///

      let metaproofVerified = true;

      if (metaproofNode !== null) {
        const metastatementNode = conclusion.getMetastatementNode();

        metaproofVerified = verifyMetaproof(metaproofNode, metastatementNode, context);
      }

      if (metaproofVerified) {
        const rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

        context.addRule(rule);

        ruleVerified = true;
      }
    }

    if (ruleVerified) {
      log.info(`Verified the '${labelsString}' rule.`);
    }
  }

  return ruleVerified;
}

module.exports = verifyRule;
