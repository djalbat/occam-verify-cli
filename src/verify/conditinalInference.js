"use strict";

import { nodeQuery } from "../utilities/query";

const conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!"),
      premiseOrPremisesNodeQuery = nodeQuery("/conditionalInference/premise|premises!");

export default function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, context = this) {
  let conditionalInferenceVerified = false;

  context.begin(conditionalInferenceNode);

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        premiseOrPremisesNode = premiseOrPremisesNodeQuery(conditionalInferenceNode),
        premiseOrPremisesVerified = context.verifyPremiseOrPremises(premiseOrPremisesNode, premises);

  if (premiseOrPremisesVerified) {
    const conclusionVerified = context.verifyConclusion(conclusionNode, conclusions);

    conditionalInferenceVerified = conclusionVerified;  ///
  }

  conditionalInferenceVerified ?
    context.complete(conditionalInferenceNode) :
      context.halt(conditionalInferenceNode);

  return conditionalInferenceVerified;
}
