"use strict";

import { loggingUtilities } from "necessary";

import MetaAssertion from "../../metaAssertion";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const { log } = loggingUtilities;

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

export default function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const derived = context.isDerived();

    if (derived) {
      const metaAssertion = MetaAssertion.fromMetastatementNode(metastatementNode),
            metaAssertionMatches = context.matchMetaAssertion(metaAssertion);

      unqualifiedMetastatementVerified = metaAssertionMatches;  ///
    } else {
      unqualifiedMetastatementVerified = true;
    }
  }

  if (unqualifiedMetastatementVerified) {
    const metastatementString = nodeAsString(metastatementNode);

    log.debug(`Verified the '${metastatementString}' unqualified metastatement.`);
  }

  return unqualifiedMetastatementVerified;
}
