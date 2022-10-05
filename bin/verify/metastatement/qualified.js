"use strict";

const { loggingUtilities } = require("necessary");

const equateRuleMetastatements = require("../../equate/metastatementNodes");

const { nodeAsString } = require("../../utilities/string"),
      { nodeQuery, referenceNameFromReferenceNode } = require("../../utilities/query");

const { log } = loggingUtilities;

const referenceNodeQuery = nodeQuery("/qualifiedMetastatement/qualification!/reference!"),
      metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!");

function verifyQualifiedMetastatement(qualifiedMetastatementNode, context) {
  let qualifiedMetastatementVerified = false;

  let metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedMetastatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode),
          rule = context.findRuleByReferenceName(referenceName);

    if (rule !== null) {
      const metaSubstitutions = [],
            metastatementNodes = context.getMetastatementNodes(),
            ruleMetastatementNodes = rule.getMetastatementNodes(),
            ruleMetastatementsEqual = equateRuleMetastatements(ruleMetastatementNodes, metastatementNodes, metaSubstitutions, context);

      if (ruleMetastatementsEqual) {
        metastatementNode = rule.getMetastatementNode();

        context.addMetastatementNode(metastatementNode);

        const metastatementString = nodeAsString(metastatementNode);

        log.info(`Verified the '${metastatementString}' qualified metastatement.`);

        qualifiedMetastatementVerified = true;
      }
    }
  }

  return qualifiedMetastatementVerified;
}

module.exports = verifyQualifiedMetastatement;

