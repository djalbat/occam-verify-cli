"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localMetaContext) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
        unqualifiedMetastatementString = localMetaContext.nodeAsString(unqualifiedMetastatementNode);

  localMetaContext.trace(`Verifying the '${unqualifiedMetastatementString}' unqualified metastatement...`, unqualifiedMetastatementNode);

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
    localMetaContext.debug(`...verified the '${unqualifiedMetastatementString}' unqualified metastatement.`, unqualifiedMetastatementNode);
  }

  return unqualifiedMetastatementVerified;
}
