"use strict";

const verifyMetaproof = require("../verify/metaproof"),
      MetaproofContext = require("../context/metaproof"),
      verifyConclusion = require("../verify/conclusion"),
      verifyPremiseOrPremises = require("../verify/premiseOrPremises");

const { nodeQuery } = require("../utilities/query");
const Conclusion = require("../conclusion");

const metaproofNodeQuery = nodeQuery("/conditionalInference/metaproof!"),
      conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      metastatementNodeQuery = nodeQuery("/conditionalInference/conclusion!/unqualifiedMetastatement!/metastatement!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context) {
  let conditionalInferenceVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        metastatementNode = metastatementNodeQuery(conditionalInferenceNode),
        premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, context);

  if (premiseOrPremisesVerified) {
    const conclusionVerified = verifyConclusion(conclusionNode, conclusions, context);

    if (conclusionVerified) {
      conditionalInferenceVerified = true;

      const metaproofNode = metaproofNodeQuery(conditionalInferenceNode);

      if (metaproofNode !== null) {
        const metaproofVerified = verifyMetaproof(metaproofNode, metastatementNode, context);

        conditionalInferenceVerified = metaproofVerified; ///
      }
    }
  }

  if (conditionalInferenceVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);
  }

  return conditionalInferenceVerified;
}

module.exports = verifyConditionalInference;
