"use strict";

const { loggingUtilities } = require("necessary");

const { nodeAsString } = require("../../utilities/string"),
      { nodeQuery, referenceNameFromReferenceNode } = require("../../utilities/query");

const { log } = loggingUtilities;

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

module.exports = verifyQualifiedMetastatement;
