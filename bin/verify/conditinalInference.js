"use strict";

const verifyConclusion = require("../verify/conclusion"),
      verifyPremiseOrPremises = require("../verify/premiseOrPremises");

const { nodeQuery } = require("../utilities/query");

const conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context) {
  let conditionalInferenceVerified = false;

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

  if (premiseOrPremisesVerified) {
    const conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

    conditionalInferenceVerified = conclusionVerified;
  }

  return conditionalInferenceVerified;
}

module.exports = verifyConditionalInference;
