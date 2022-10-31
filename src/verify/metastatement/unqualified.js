"use strict";

import MetaAssertion from "../../metaAssertion";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext) {
  let unqualifiedMetastatementVerified = false;

  metaproofContext.begin(unqualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const derived = metaproofContext.isDerived();

    if (derived) {
      const metaAssertion = MetaAssertion.fromMetastatementNode(metastatementNode),
            metaAssertionMatches = metaproofContext.matchMetaAssertion(metaAssertion);

      unqualifiedMetastatementVerified = metaAssertionMatches;  ///
    } else {
      unqualifiedMetastatementVerified = true;
    }
  }

  if (unqualifiedMetastatementVerified) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verified the '${metastatementString}' unqualified metastatement.`);
  }

  unqualifiedMetastatementVerified ?
    metaproofContext.complete(unqualifiedMetastatementNode) :
      metaproofContext.halt(unqualifiedMetastatementNode);

  return unqualifiedMetastatementVerified;
}
