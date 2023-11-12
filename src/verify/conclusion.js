"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, metaproofContext) {
  let conclusionVerified = false;

  const conclusionString = metaproofContext.nodeAsString(conclusionNode);

  metaproofContext.debug(`Verifying the '${conclusionString}' conclusion.`, conclusionNode);

  const derived = false,
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, metaproofContext);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    conclusionVerified = true;
  }

  if (conclusionVerified) {
    metaproofContext.info(`Verified the '${conclusionString}' conclusion.`, conclusionNode);
  }

  return conclusionVerified;
}
