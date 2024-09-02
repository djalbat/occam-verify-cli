"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
        unqualifiedMetastatementString = localContext.nodeAsString(unqualifiedMetastatementNode);

  localContext.trace(`Verifying the '${unqualifiedMetastatementString}' unqualified metastatement...`, unqualifiedMetastatementNode);

  if (derived) {
    const matchesMetastatementNode = localContext.matchMetastatementNode(metastatementNode);

    unqualifiedMetastatementVerified = matchesMetastatementNode;  ///
  }

  if (!unqualifiedMetastatementVerified) {
    const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, localContext);

    unqualifiedMetastatementVerified = metastatementVerified; ///
  }

  if (unqualifiedMetastatementVerified) {
    localContext.debug(`...verified the '${unqualifiedMetastatementString}' unqualified metastatement.`, unqualifiedMetastatementNode);
  }

  return unqualifiedMetastatementVerified;
}
