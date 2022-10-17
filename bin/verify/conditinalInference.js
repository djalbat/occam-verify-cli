"use strict";

const verifyConclusion = require("../verify/conclusion"),
      verifyPremiseOrPremises = require("../verify/premiseOrPremises");

const { nodeQuery } = require("../utilities/query");
const Conclusion = require("../conclusion");

const conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      metastatementNodeQuery = nodeQuery("/conditionalInference/conclusion!/unqualifiedMetastatement!/metastatement!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context) {
  let conditionalInferenceVerified = false;

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        metastatementNode = metastatementNodeQuery(conditionalInferenceNode),
        premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

  if (premiseOrPremisesVerified) {
    const conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

    if (conclusionVerified) {
      const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      conditionalInferenceVerified = true;
    }
  }

  return conditionalInferenceVerified;
}

module.exports = verifyConditionalInference;
