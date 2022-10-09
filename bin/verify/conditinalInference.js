"use strict";

const verifyMetaproof = require("../verify/metaproof"),
      verifyConclusion = require("../verify/conclusion"),
      verifyPremiseOrPremises = require("../verify/premiseOrPremises");

const { nodeQuery } = require("../utilities/query");

const metaproofNodeQuery = nodeQuery("/rule/metaproof!"),
      conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

function verifyConditionalInference(ruleNode, premises, conclusions, context) {
  let conditionalInferenceVerified = false;

  const inferenceConditionalNode = inferenceConditionalNodeQuery(ruleNode);

  if (inferenceConditionalNode !== null) {
    const premiseOrPremisesNode = premiseOrPremisesNodeQuery(inferenceConditionalNode),
          premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

    if (premiseOrPremisesVerified) {
      const conclusionNode = conclusionNodeQuery(inferenceConditionalNode),
            conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);


      const metaproofNode = metaproofNodeQuery(ruleNode);

      let metaproofVerified = true;

      if (metaproofNode !== null) {
        metaproofVerified = verifyMetaproof(metaproofNode, rules, context);
      }

      if (metaproofVerified) {
        ruleVerified = true;
      }
      conditionalInferenceVerified = conclusionVerified;
    }
  }

  return conditionalInferenceVerified;
}

module.exports = verifyConditionalInference;
