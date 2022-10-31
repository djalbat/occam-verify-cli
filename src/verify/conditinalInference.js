"use strict";

import verifyConclusion from "../verify/conclusion";
import verifyPremiseOrPremises from "../verify/premiseOrPremises";

import { nodeQuery } from "../utilities/query";

const conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

export default function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, metaproofContext) {
  let conditionalInferenceVerified = false;

  metaproofContext.begin(conditionalInferenceNode);

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = verifyPremiseOrPremises(premiseOrPremisesNode, premises, metaproofContext);

  if (premiseOrPremisesVerified) {
    const conclusionVerified = verifyConclusion(conclusionNode, conclusions, metaproofContext);

    conditionalInferenceVerified = conclusionVerified;  ///
  }

  conditionalInferenceVerified ?
    metaproofContext.complete(conditionalInferenceNode) :
      metaproofContext.halt(conditionalInferenceNode);

  return conditionalInferenceVerified;
}
