"use strict";

const verifyMetastatement = require("../verify/metastatement");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!");

function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementVerified = verifyMetastatement(metastatementNode, context);

    unqualifiedMetastatementVerified = metastatementVerified; ///
  }

  return unqualifiedMetastatementVerified;
}

module.exports = verifyUnqualifiedMetastatement;
