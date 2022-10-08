"use strict";

const Rule = require("../../rule"),
      verifyLabels = require("../../verify/labels"),
      verifyConclusion = require("../../verify/conclusion"),
      verifyPremiseOrPremises = require("../../verify/premiseOrPremises");

const { first } = require("../../utilities/array"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const labelNodesQuery = nodesQuery("/rule/label"),
      conclusionNodeQuery = nodeQuery("/inferenceConditional/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/inferenceConditional/premise|premises!"),
      inferenceConditionalNodeQuery = nodeQuery("/rule/inferenceConditional!");

function verifyInferenceConditionalRule(ruleNode, rules, context) {
  let inferenceConditionalRuleVerified = false;

  const inferenceConditionalNode = inferenceConditionalNodeQuery(ruleNode);

  if (inferenceConditionalNode !== null) {
    const labels = [],
          labelNodes = labelNodesQuery(ruleNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const premises = [],
            premiseOrPremisesNode = premiseOrPremisesNodeQuery(inferenceConditionalNode),
            premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

      if (premiseOrPremisesVerified) {
        const conclusions = [],
              conclusionNode = conclusionNodeQuery(inferenceConditionalNode),
              conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

        if (conclusionVerified) {
          const firstConclusion = first(conclusions),
                conclusion = firstConclusion, ///
                rule = Rule.fromPremisesConclusionAndLabels(premises, conclusion, labels);

          rules.push(rule);

          inferenceConditionalRuleVerified = true;
        }
      }
    }
  }

  return inferenceConditionalRuleVerified;
}

module.exports = verifyInferenceConditionalRule;
