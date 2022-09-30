"use strict";

const MetaproofContext = require("../context/metaproof"),
      verifyMetaDerivation = require("../verify/metaDerivation");

const { nodeQuery } = require("../utilities/query");

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

function verifyMetaproof(metaproofNode, premiseMetastatementNodes, conclusionMetastatementNode, context) {
  let metaproofVerified = false;

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode);

  if (metaDerivationNode !== null) {
    const metaproofContext = MetaproofContext.fromContext();

    context = metaproofContext; ///

    const metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, premiseMetastatementNodes, conclusionMetastatementNode, context);

    metaproofVerified = metaDerivationVerified; ///
  }

  return metaproofVerified;
}

module.exports = verifyMetaproof;
