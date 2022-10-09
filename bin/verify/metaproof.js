"use strict";

const verifyMetaDerivation = require("../verify/metaDerivation"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/qualifiedMetastatement!/metastatement!"),
      metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement!");

function verifyMetaproof(metaproofNode, context) {
  let metaproofVerified = false;

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode);

  let metaDerivationVerified = false;

  if (metaDerivationNode !== null) {
    metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, context);
  }

  if (metaDerivationVerified) {
    const qualifiedMetastatementNode = qualifiedStatementNodeQuery(metaproofNode),
          qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

    if (qualifiedMetastatementVerified) {
      debugger

      // const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
      //       firstRule = first(rules),
      //       rule = firstRule, ///
      //       metastatementString = nodeAsString(metastatementNode),
      //       conclusionMetastatementNode = rule.getConclusionMetastatementNode(),
      //       conclusionMetastatementString = nodeAsString(conclusionMetastatementNode);
      //
      // if (metastatementString === conclusionMetastatementString) {
      //   metaproofVerified = true;
      // }
    }
  }

  return metaproofVerified;
}

module.exports = verifyMetaproof;
