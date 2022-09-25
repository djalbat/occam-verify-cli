"use strict";

const verifyMetastatement = require("../verify/metastatement");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!");

function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
        metastatementVerified = verifyMetastatement(metastatementNode, context),
        unqualifiedMetastatementVerified = metastatementVerified; ///

  return unqualifiedMetastatementVerified;
}

module.exports = verifyUnqualifiedMetastatement;
