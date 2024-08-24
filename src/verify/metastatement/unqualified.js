"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = localMetaContext.nodeAsString(metastatementNode);

    localMetaContext.trace(`Verifying the '${metastatementString}' unqualified metastatement...`, unqualifiedMetastatementNode);

    if (derived) {
      const metastatementMatches = localMetaContext.matchMetastatement(metastatementNode);

      unqualifiedMetastatementVerified = metastatementMatches;  ///
    }

    if (!unqualifiedMetastatementVerified) {
      const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localMetaContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      unqualifiedMetastatementVerified = metastatementVerified; ///
    }

    if (unqualifiedMetastatementVerified) {
      localMetaContext.debug(`...verified the '${metastatementString}' unqualified metastatement.`, unqualifiedMetastatementNode);
    }
  }

  return unqualifiedMetastatementVerified;
}
