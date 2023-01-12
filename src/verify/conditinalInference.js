"use strict";

import verifyConclusion from "../verify/conclusion";
import verifyPrmise from "../verify/premise";

import { nodeQuery, nodesQuery } from "../utilities/query";

const premisesNodeQuery = nodesQuery("/conditionalInference/premise"),
      conclusionNodeQuery = nodeQuery("/conditionalInference/conclusion!");

export default function verifyConditionalInference(conditionalInferenceNode, premises, conclusions, metaproofContext) {
  let conditionalInferenceVerified = false;

  metaproofContext.begin(conditionalInferenceNode);

  const conclusionNode = conclusionNodeQuery(conditionalInferenceNode),
        premiseNodes = premisesNodeQuery(conditionalInferenceNode),
        premisesVerified = premiseNodes.every((premiseNode) => {
          const premiseVerified = verifyPrmise(premiseNode, premises, metaproofContext);

          if (premiseVerified) {
            return true;
          }
        });

  if (premisesVerified) {
    const conclusionVerified = verifyConclusion(conclusionNode, conclusions, metaproofContext);

    conditionalInferenceVerified = conclusionVerified;  ///
  }

  conditionalInferenceVerified ?
    metaproofContext.complete(conditionalInferenceNode) :
      metaproofContext.halt(conditionalInferenceNode);

  return conditionalInferenceVerified;
}
