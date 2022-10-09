"use strict";

const verifyConclusion = require("../../verify/conclusion"),
      verifyPremiseOrPremises = require("../../verify/premiseOrPremises");

const { nodeQuery } = require("../../utilities/query");

const conclusionNodeQuery = nodeQuery("/inferenceConditional/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/inferenceConditional/premise|premises!"),
      inferenceConditionalNodeQuery = nodeQuery("/rule/inferenceConditional!");

function verifyInferenceConditionalRule(ruleNode, premises, conclusions, context) {
  let inferenceConditionalRuleVerified = false;

  const inferenceConditionalNode = inferenceConditionalNodeQuery(ruleNode);

  if (inferenceConditionalNode !== null) {
    const premiseOrPremisesNode = premiseOrPremisesNodeQuery(inferenceConditionalNode),
          premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

    if (premiseOrPremisesVerified) {
      const conclusionNode = conclusionNodeQuery(inferenceConditionalNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

      inferenceConditionalRuleVerified = conclusionVerified;
    }
  }

  return inferenceConditionalRuleVerified;
}

module.exports = verifyInferenceConditionalRule;
