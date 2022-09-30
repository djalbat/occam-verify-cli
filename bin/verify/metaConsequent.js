"use strict";

const MetaConsequent = require("../metaConsequent"),
      verifyUnqualifiedMetaStatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetaStatement/metastatement!"),
      unqualifiedMetaStatementNodeQuery = nodeQuery("/metaConsequent/unqualifiedMetaStatement!");

function verifyMetaConsequent(metaConsequentNode, metaConsequents, context) {
  let metaConsequentVerified = false;

  const inAntecedent = false;

  context.setInAntecedent(inAntecedent);

  const unqualifiedMetaStatementNode = unqualifiedMetaStatementNodeQuery(metaConsequentNode);

  if (unqualifiedMetaStatementNode !== null) {
    const unqualifiedMetaStatementVerified = verifyUnqualifiedMetaStatement(unqualifiedMetaStatementNode, context);

    if (unqualifiedMetaStatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetaStatementNode),
            metaConsequent = MetaConsequent.fromMetaStatementNode(metastatementNode);

      metaConsequents.push(metaConsequent);

      metaConsequentVerified = true;
    }
  }

  return metaConsequentVerified;
}

module.exports = verifyMetaConsequent;
