"use strict";

const verifyMetaproofDerivation = require("../verify/metaproofDerivation");

const { nodeQuery } = require("../utilities/query");

const metaproofDerivationNodeQuery = nodeQuery("/metaproof/metaproofDerivation!");

function verifyMetaproof(metaproofNode, premiseMetastatementNodes, conclusionMetastatementNode, context) {
  let metaproofVerified = false;

  const metaproofDerivationNode = metaproofDerivationNodeQuery(metaproofNode);

  if (metaproofDerivationNode !== null) {
    const metaproofDerivationVerified = verifyMetaproofDerivation(metaproofDerivationNode, premiseMetastatementNodes, conclusionMetastatementNode, context);

    debugger
  }

  return metaproofVerified;
}

module.exports = verifyMetaproof;
