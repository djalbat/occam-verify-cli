"use strict";

import { loggingUtilities } from "necessary";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const { log } = loggingUtilities;

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, context) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          rule = context.findRuleByReferenceName(referenceName);

    if (rule !== null) {
      const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, context);

      qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
    }
  }

  if (qualifiedMetastatementVerified) {
    const metastatementString = nodeAsString(metastatementNode);

    log.debug(`Verified the '${metastatementString}' qualified metastatement.`);
  }

  return qualifiedMetastatementVerified;
}
