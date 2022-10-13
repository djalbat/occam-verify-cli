"use strict";

const verifyMetaDerivation = require("../verify/metaDerivation"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified");

const { nodeQuery } = require("../utilities/query");

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement!");

function verifyMetaproof(metaproofNode, metastatementNode, context) {
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
      const lastMetaAssertion = context.getLastMetaAssertion(),
            lastMetaAssertionMetastatementNode = lastMetaAssertion.getMetastatementNode(),
            metaProofMetastatementNode = lastMetaAssertionMetastatementNode,  ///
            metaProofMetastatementNodeMatches = matchMetaProofMetastatementNode(metaProofMetastatementNode, metastatementNode);

      metaproofVerified = metaProofMetastatementNodeMatches;  ///
    }
  }

  return metaproofVerified;
}

module.exports = verifyMetaproof;

function matchMetaProofMetastatementNode(metaProofMetastatementNode, metastatementNode) {
  let metaProofMetastatementNodeMatches = false;

  debugger

  return metaProofMetastatementNodeMatches;
}
