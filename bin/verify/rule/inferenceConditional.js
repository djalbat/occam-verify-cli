"use strict";

const Rule = require("../../rule"),
      verifyLabels = require("../../verify/labels"),
      verifyPremise = require("../../verify/premise"),
      verifyConclusion = require("../../verify/conclusion");

const { first } = require("../../utilities/array"),
      { nodeQuery, nodesQuery } = require("../../utilities/query");

const labelNodesQuery = nodesQuery("/rule/label"),
      premiseNodeQuery = nodeQuery("/inferenceConditional/premise|premises!"),
      conclusionNodeQuery = nodeQuery("/inferenceConditional/conclusion!"),
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

          rules.push(rule);

          inferenceConditionalRuleVerified = true;
        }
      }
    }
  }

  return inferenceConditionalRuleVerified;
}

module.exports = verifyInferenceConditionalRule;
