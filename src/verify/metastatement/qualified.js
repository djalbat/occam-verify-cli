"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, assignments, derived, metaproofContext) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = metaproofContext.nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the '${metastatementString}' qualified metastatement...`, qualifiedMetastatementNode);

    let ruleMatchesMetastatement = true;

    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode);

    if (referenceNode !== null) {
      const referenceName = referenceNameFromReferenceNode(referenceNode),
            rule = metaproofContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metaproofContext);
      }
    }

    if (ruleMatchesMetastatement) {
      const metastatementVerified = verifyMetastatement(metastatementNode, assignments, derived, metaproofContext);

      qualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  return qualifiedMetastatementVerified;
}
