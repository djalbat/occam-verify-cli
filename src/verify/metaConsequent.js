"use strict";

import MetaConsequent from "../metaConsequent";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetastatement!");

export default function verifyMetaConsequent(metaConsequentNode, metaConsequents, substitutions, localMetaContext) {
  let metaConsequentVerified = false;

  const metaConsequentString = localMetaContext.nodeAsString(metaConsequentNode);

  localMetaContext.trace(`Verifying the '${metaConsequentString}' meta-consequent...`, metaConsequentNode);

  const derived = false,
        assignments = [],
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaConsequentNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext);

  if (unqualifiedMetastatementVerified) {
    metaConsequentVerified = true;
  }

  if (metaConsequentVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaConsequent = MetaConsequent.fromMetastatementNode(metastatementNode);

    metaConsequents.push(metaConsequent);

    localMetaContext.debug(`...verified the '${metaConsequentString}' meta-consequent.`, metaConsequentNode);
  }

  return metaConsequentVerified;
}
