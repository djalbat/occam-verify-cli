"use strict";

const verifyMetaSublemma = require("../verify/metaSublemma"),
      verifyQualifiedMetastatement = require("../verify/qualifiedMetastatement");

const { nodesQuery } = require("../utilities/query"),
      { META_SUB_LEMMA_RULE_NAME, QUALIFIED_METASTATEMENT_RULE_NAME } = require("../ruleNames");

const metaSublemmaQualifiedMetastatementNodesQuery = nodesQuery("/metaproofDerivation/metaSublemma|qualifiedMetastatement");

function verifyMetaproofDerivation(metaproofNode, premiseMetastatementNodes, conclusionMetastatementNode, context) {
  const metaSublemmaQualifiedMetastatementNodes = metaSublemmaQualifiedMetastatementNodesQuery(metaproofNode),
        metaSublemmaQualifiedMetastatementsVerified = metaSublemmaQualifiedMetastatementNodes.every((metaSublemmaQualifiedMetastatementNode) => {
          let metaSublemmaQualifiedMetastatementVerified;

          const ruleName = metaSublemmaQualifiedMetastatementNode.getRuleName();

          switch (ruleName) {
            case META_SUB_LEMMA_RULE_NAME: {
              const metaSublemmaNode = metaSublemmaQualifiedMetastatementNode,  ///
                    metaSublemmaVerified = verifyMetaSublemma(metaSublemmaNode, premiseMetastatementNodes, conclusionMetastatementNode, context);

              metaSublemmaQualifiedMetastatementVerified = metaSublemmaVerified;  ///

              break;
            }

            case QUALIFIED_METASTATEMENT_RULE_NAME: {
              const qualifiedMetastatementNode = metaSublemmaQualifiedMetastatementNode,  ///
                    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, premiseMetastatementNodes, conclusionMetastatementNode, context);

              metaSublemmaQualifiedMetastatementVerified = qualifiedMetastatementVerified;  ///

              break;
            }
          }

          return metaSublemmaQualifiedMetastatementVerified;
        }),
        metaproofDerivationVerified = metaSublemmaQualifiedMetastatementsVerified;  ///

  return metaproofDerivationVerified;
}

module.exports = verifyMetaproofDerivation;
