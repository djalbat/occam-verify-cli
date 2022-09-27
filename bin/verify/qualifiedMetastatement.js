"use strict";

const verifyMetastatement = require("../verify/metastatement");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!");

function verifyQualifiedMetastatement(qualifiedMetastatementNode, context) {
  let qualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementVerified = verifyMetastatement(metastatementNode, context);

    qualifiedMetastatementVerified = metastatementVerified; ///
  }

  return qualifiedMetastatementVerified;
}

module.exports = verifyQualifiedMetastatement;
