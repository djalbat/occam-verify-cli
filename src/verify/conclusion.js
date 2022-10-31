"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, metaproofContext) {
  let conclusionVerified = false;

  metaproofContext.begin(conclusionNode);

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode);

  if (unqualifiedMetastatementNode !== null) {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

  conclusionVerified ?
    metaproofContext.complete(conclusionNode) :
      metaproofContext.halt(conclusionNode);

  return conclusionVerified;
}
