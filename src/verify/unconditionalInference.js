"use strict";

import verifyConclusion from "../verify/conclusion";

import { nodeQuery } from "../utilities/query";

const conclusionNodeQuery = nodeQuery("/unconditionalInference/conclusion!");

export default function verifyUnconditionalInference(conditionalInferenceNode, conclusions, metaproofContext) {
  let unconditionalInferenceVerified;

  metaproofContext.begin(conditionalInferenceNode);

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        conclusionVerified = verifyConclusion(conclusionNode, conclusions, metaproofContext);

  unconditionalInferenceVerified = conclusionVerified;  ///

  unconditionalInferenceVerified ?
    metaproofContext.complete(conditionalInferenceNode) :
      metaproofContext.halt(conditionalInferenceNode);

  return unconditionalInferenceVerified;
}
