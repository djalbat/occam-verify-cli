"use strict";

import verifyMetastatement from "../metastatement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assertions, derived, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  metaproofContext.begin(unqualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the ${metastatementString} unqualified metastatement...`);

    let metastatementMatches = true;

    if (derived) {
      metastatementMatches = metaproofContext.matchMetastatement(metastatementNode);
    }

    if (metastatementMatches) {
      const metastatementVerified = verifyMetastatement(metastatementNode, assertions, metaproofContext);

      unqualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  unqualifiedMetastatementVerified ?
    metaproofContext.complete(unqualifiedMetastatementNode) :
      metaproofContext.halt(unqualifiedMetastatementNode);

  return unqualifiedMetastatementVerified;
}
