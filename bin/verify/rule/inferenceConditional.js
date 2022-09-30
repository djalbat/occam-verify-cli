"use strict";

const { arrayUtilities } = require("necessary");

const Rule = require("../../rule"),
      verifyLabels = require("../../verify/labels"),
      verifyPremise = require("../../verify/premise"),
      MetaproofContext = require("../../context/metaproof"),
      verifyConclusion = require("../../verify/conclusion");

const { nodeQuery, nodesQuery } = require("../../utilities/query");

const { first } = arrayUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      premiseNodeQuery = nodeQuery("/inferenceConditional/premise|premises!"),
      conclusionNodeQuery = nodeQuery("/inferenceConditional/conclusion!"),
      inferenceConditionalNodeQuery = nodeQuery("/rule/inferenceConditional!");

function verifyInferenceConditionalRule(ruleNode, context) {
  let inferenceConditionalRuleVerified = false;

  const inferenceConditionalNode = inferenceConditionalNodeQuery(ruleNode);

  if (inferenceConditionalNode !== null) {
    const metaproofContext = MetaproofContext.fromContext(context);

    context = metaproofContext; ///

    const labels = [],
          labelNodes = labelNodesQuery(ruleNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const premises = [],
            premiseNode = premiseNodeQuery(inferenceConditionalNode),
            premiseVerified = verifyPremise(premiseNode, premises, context);

      if (premiseVerified) {
        const conclusions = [],
              conclusionNode = conclusionNodeQuery(inferenceConditionalNode),
              conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

        if (conclusionVerified) {
          const firstPremise = first(premises),
                firstConclusion = first(conclusions),
                premise = firstPremise, ///
                conclusion = firstConclusion, ///
                rule = Rule.fromPremiseConclusionAndLabels(premise, conclusion, labels);

          context.addRule(rule);

          inferenceConditionalRuleVerified = true;
        }
      }
    }
  }

  return inferenceConditionalRuleVerified;
}

module.exports = verifyInferenceConditionalRule;
