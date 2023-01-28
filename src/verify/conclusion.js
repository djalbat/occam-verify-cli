"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, metaproofContext) {
  let conclusionVerified = false;

  const conclusionString = metaproofContext.nodeAsString(conclusionNode);

  metaproofContext.debug(conclusionNode, `Verifying the '${conclusionString}' conclusion...`);

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

  return conclusionVerified;
}
