"use strict";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext) {
  let qualifiedMetastatementVerified = false;

  metaproofContext.begin(qualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          rule = metaproofContext.findRuleByReferenceName(referenceName);

    if (rule !== null) {
      const ruleMatchesMetastatement = rule.matchMetastatement(metastatementNode, metaproofContext);

      qualifiedMetastatementVerified = ruleMatchesMetastatement;  ///
    }
  }

  if (qualifiedMetastatementVerified) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verified the '${metastatementString}' qualified metastatement.`);
  }

  qualifiedMetastatementVerified ?
    metaproofContext.complete(qualifiedMetastatementNode) :
      metaproofContext.halt(qualifiedMetastatementNode);

  return qualifiedMetastatementVerified;
}
