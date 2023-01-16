"use strict";

import verifyMetastatement from "../../verify/metastatement";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

export default function verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext) {
  let qualifiedMetastatementVerified = false;

  metaproofContext.begin(qualifiedMetastatementNode);

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementString = nodeAsString(metastatementNode);

    metaproofContext.debug(`Verifying the ${metastatementString} qualified metastatement...`);

    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode);

    if (referenceNode === null) {
      const qualified = true,
            metastatementVerified = verifyMetastatement(metastatementNode, qualified, metaproofContext);

      qualifiedMetastatementVerified = metastatementVerified; ///
    } else {
      const referenceName = referenceNameFromReferenceNode(referenceNode),
            rule = metaproofContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        const ruleMatchesStatement = rule.matchMetastatement(metastatementNode, metaproofContext);

        qualifiedMetastatementVerified = ruleMatchesStatement;  ///
      }
    }
  }

  qualifiedMetastatementVerified ?
    metaproofContext.complete(qualifiedMetastatementNode) :
      metaproofContext.halt(qualifiedMetastatementNode);

  return qualifiedMetastatementVerified;
}
