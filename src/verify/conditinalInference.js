"use strict";

import verifyConclusion from "../verify/conclusion";
import verifyPremiseOrPremises from "../verify/premiseOrPremises";

import { nodeQuery } from "../utilities/query";

const conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

export default function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context) {
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
