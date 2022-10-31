"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

export default function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, metaproofContext) {
  let unconditionalInferenceVerified = false;

  metaproofContext.begin(unconditionalInferenceNode);

  const metastatementNode = metastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

  if (unqualifiedMetastatementVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    unconditionalInferenceVerified = true;
  }

  unconditionalInferenceVerified ?
    metaproofContext.complete(unconditionalInferenceNode) :
      metaproofContext.halt(unconditionalInferenceNode);

  return unconditionalInferenceVerified;
}
