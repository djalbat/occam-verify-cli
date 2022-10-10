"use strict";

const MetaAssertion = require("../metaAssertion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const unqualifiedMetastatementNodeQuery = nodeQuery("/metaAntecedent/unqualifiedMetastatement!");

function verifyMetaAntecedent(metaAntecedentNode, context) {
  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaAntecedentNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context),
        metaAntecedentVerified = unqualifiedMetastatementVerified;  ///

  if (metaAntecedentVerified) {
    const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

    context.addMetaAssertion(metaAssertion);
  }

  return metaAntecedentVerified;
}

module.exports = verifyMetaAntecedent;
