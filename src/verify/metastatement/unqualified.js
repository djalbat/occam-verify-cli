"use strict";

import verifyMetastatement from "../metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assertions, derived, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the '${metastatementString}' unqualified metastatement...`, unqualifiedMetastatementNode);

    let metastatementMatches = true;

    if (derived) {
      metastatementMatches = metaproofContext.matchMetastatement(metastatementNode);
    }

    if (metastatementMatches) {
      const metastatementVerified = verifyMetastatement(metastatementNode, assertions, derived, metaproofContext);

      unqualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  return unqualifiedMetastatementVerified;
}
