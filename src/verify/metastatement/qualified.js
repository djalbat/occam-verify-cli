"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, assertions, derived, metaproofContext) {
  let qualifiedMetastatementVerified = false;

  metaproofContext.begin(qualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the ${metastatementString} qualified metastatement...`);

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
      const metastatementVerified = verifyMetastatement(metastatementNode, assertions, derived, metaproofContext);

      qualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  qualifiedMetastatementVerified ?
    metaproofContext.complete(qualifiedMetastatementNode) :
      metaproofContext.halt(qualifiedMetastatementNode);

  return qualifiedMetastatementVerified;
}
