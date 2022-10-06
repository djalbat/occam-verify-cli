"use strict";

const { loggingUtilities } = require("necessary");

const { nodeAsString } = require("../../utilities/string"),
      { equatePremises, adjustConclusion } = require("../../utilities/rule"),
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
            premiseMetastatementNodes = rule.getPremiseMetastatementNodes(),
            premisesEqual = equatePremises(premiseMetastatementNodes, metastatementNodes, metaSubstitutions, context);

      if (premisesEqual) {
        const conclusionMetastatementNode = rule.getConclusionMetastatementNode();

        metastatementNode = adjustConclusion(conclusionMetastatementNode, metaSubstitutions); ///

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

