"use strict";

const verifyMetaproof = require("../verify/metaproof"),
      verifyConclusion = require("../verify/conclusion"),
      verifyPremiseOrPremises = require("../verify/premiseOrPremises");

const { nodeQuery } = require("../utilities/query");

const metaproofNodeQuery = nodeQuery("/conditionalInference/metaproof!"),
      conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context) {
  let conditionalInferenceVerified = false;

  const premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

  if (premiseOrPremisesVerified) {
    const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
          conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

    if (conclusionVerified) {
      let metaproofVerified = true;

      const metaproofNode = metaproofNodeQuery(conditionalInferenceNode);

      if (metaproofNode !== null) {
        metaproofVerified = verifyMetaproof(metaproofNode, context);
      }

      conditionalInferenceVerified = metaproofVerified; ///
    }
  }

  return conditionalInferenceVerified;
}

module.exports = verifyConditionalInference;
