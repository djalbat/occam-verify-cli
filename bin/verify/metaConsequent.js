"use strict";

const verifyUnqualifiedMetaStatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const unqualifiedMetaStatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetaStatement!");

function verifyMetaConsequent(metaConsequentNode, metaConsequents, context) {
  let metaConsequentVerified = false;

  const unqualifiedMetaStatementNode = unqualifiedMetaStatementNodeQuery(metaConsequentNode);

  if (unqualifiedMetaStatementNode !== null) {
    const unqualifiedMetaStatementVerified = verifyUnqualifiedMetaStatement(unqualifiedMetaStatementNode, context);

    metaConsequentVerified = unqualifiedMetaStatementVerified;
  }

  return metaConsequentVerified;
}

module.exports = verifyMetaConsequent;
