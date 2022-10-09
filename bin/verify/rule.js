"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      verifyMetaproof = require("../verify/metaproof"),
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

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
  }

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const premises = [],
        conclusions = [],
        inferenceConditionalRuleVerified = verifyInferenceConditionalRule(ruleNode, premises, conclusions, context),
        unqualifiedMetastatementRuleVerified = verifyUnqualifiedMetastatementRule(ruleNode, premises, conclusions, context);

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
    const firstConclusion = first(conclusions),
          conclusion = firstConclusion, ///
          rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

    context.addRule(rule);

    log.info(`Verified the '${labelsString}' rule.`);
  }

  return ruleVerified;
}

module.exports = verifyRule;
