"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  metaproofContext.begin(unqualifiedMetastatementNode);

  const unqualifiedMetastatementString = nodeAsString(unqualifiedMetastatementNode);

  metaproofContext.debug(`Verifying the '${unqualifiedMetastatementString}' unqualified metastatement...`);

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementVerified = verifyMetastatement(metastatementNode, metaproofContext);

    if (metastatementVerified) {
      const derived = metaproofContext.isDerived();

      if (derived) {
        const metaAssertionMatches = metaproofContext.matchMetastatement(metastatementNode);

        unqualifiedMetastatementVerified = metaAssertionMatches;  ///
      } else {
        unqualifiedMetastatementVerified = true;
      }
    }
  }

  if (unqualifiedMetastatementVerified) {
    metaproofContext.info(`Verified the '${unqualifiedMetastatementString}' unqualified metastatement.`);
  }

  unqualifiedMetastatementVerified ?
    metaproofContext.complete(unqualifiedMetastatementNode) :
      metaproofContext.halt(unqualifiedMetastatementNode);

  return unqualifiedMetastatementVerified;
}
