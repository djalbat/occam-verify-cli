"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

export default function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context) {
  let unconditionalInferenceVerified = false;

  const metastatementNode = metastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    unconditionalInferenceVerified = true;
  }

  return unconditionalInferenceVerified;
}
