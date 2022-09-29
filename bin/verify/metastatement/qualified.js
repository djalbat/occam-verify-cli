"use strict";

const verifyMetastatement = require("../../verify/metastatement");

const { nodeQuery, referenceNameFromReferenceNode } = require("../../utilities/query");

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

function verifyQualifiedMetastatement(qualifiedMetastatementNode, context) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          rule = context.findRuleByReferenceName(referenceName);

    if (rule !== null) {
      const metastatementVerified = verifyMetastatement(metastatementNode, context);

      qualifiedMetastatementVerified = metastatementVerified; ///
    }
  }

  return qualifiedMetastatementVerified;
}

module.exports = verifyQualifiedMetastatement;
