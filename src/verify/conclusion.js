"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, context) {
  let conclusionVerified = false;

  context.begin(conclusionNode);

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode);

  if (unqualifiedMetastatementNode !== null) {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

  conclusionVerified ?
    context.complete(conclusionNode) :
      context.halt(conclusionNode);

  return conclusionVerified;
}
