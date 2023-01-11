"use strict";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  metaproofContext.begin(unqualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the ${metastatementString} unqualified metastatement...`);

    const derived = metaproofContext.isDerived();

    if (derived) {
      const metaAssertionMatches = metaproofContext.matchMetastatement(metastatementNode);

      unqualifiedMetastatementVerified = metaAssertionMatches;  ///
    } else {
      unqualifiedMetastatementVerified = true;
    }
  }

  unqualifiedMetastatementVerified ?
    metaproofContext.complete(unqualifiedMetastatementNode) :
      metaproofContext.halt(unqualifiedMetastatementNode);

  return unqualifiedMetastatementVerified;
}
