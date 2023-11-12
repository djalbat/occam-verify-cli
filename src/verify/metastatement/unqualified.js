"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the '${metastatementString}' unqualified metastatement.`, unqualifiedMetastatementNode);

    if (derived) {
      const metastatementMatches = metaproofContext.matchMetastatement(metastatementNode);

      unqualifiedMetastatementVerified = metastatementMatches;  ///
    }

    if (!unqualifiedMetastatementVerified) {
      const metastatementVerified = verifyMetastatement(metastatementNode, derived, metaproofContext);

      unqualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  if (unqualifiedMetastatementVerified) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.info(`Verified the '${metastatementString}' unqualified metastatement.`, unqualifiedMetastatementNode);
  }

  return unqualifiedMetastatementVerified;
}
