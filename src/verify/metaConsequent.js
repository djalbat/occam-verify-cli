"use strict";

import MetaConsequent from "../metaConsequent";
import verifyUnqualifiedMetastatement from "./metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetastatement!");

export default function verifyMetaConsequent(metaConsequentNode, metaConsequents, localContext) {
  let metaConsequentVerified = false;

  const metaConsequentString = localContext.nodeAsString(metaConsequentNode);

  localContext.trace(`Verifying the '${metaConsequentString}' meta-consequent...`, metaConsequentNode);

  const derived = false,
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaConsequentNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, localContext);

  if (unqualifiedMetastatementVerified) {
    metaConsequentVerified = true;
  }

  if (metaConsequentVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaConsequent = MetaConsequent.fromMetastatementNode(metastatementNode);

    metaConsequents.push(metaConsequent);

    localContext.debug(`...verified the '${metaConsequentString}' meta-consequent.`, metaConsequentNode);
  }

  return metaConsequentVerified;
}
