"use strict";

import Conclusion from "../conclusion";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

export default function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context = this) {
  let unconditionalInferenceVerified = false;

  context.begin(unconditionalInferenceNode);

  const metastatementNode = metastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = context.verifyUnqualifiedMetastatement(unqualifiedMetastatementNode);

  if (unqualifiedMetastatementVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    unconditionalInferenceVerified = true;
  }

  unconditionalInferenceVerified ?
    context.complete(unconditionalInferenceNode) :
      context.halt(unconditionalInferenceNode);

  return unconditionalInferenceVerified;
}
