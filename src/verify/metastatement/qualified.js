"use strict";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, assignments, derived, metaproofContext) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the '${metastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          rule = metaproofContext.findRuleByReferenceName(referenceName);

    if (rule !== null) {
      const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metaproofContext);

      qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
    }
  }

  if (qualifiedMetastatementVerified) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.info(`Verified the '${metastatementString}' qualified metastatement.`, qualifiedMetastatementNode);
  }

  return qualifiedMetastatementVerified;
}
