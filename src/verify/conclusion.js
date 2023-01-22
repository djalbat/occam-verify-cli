"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, metaproofContext) {
  let conclusionVerified = false;

  metaproofContext.begin(conclusionNode);

  const conclusionString = metaproofContext.nodeAsString(conclusionNode);

  metaproofContext.debug(`Verifying the '${conclusionString}' conclusion...`);

  const derived = false,
        assertions = [],
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assertions, derived, metaproofContext);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    conclusionVerified = true;
  }

  conclusionVerified ?
    metaproofContext.complete(conclusionNode) :
      metaproofContext.halt(conclusionNode);

  return conclusionVerified;
}
