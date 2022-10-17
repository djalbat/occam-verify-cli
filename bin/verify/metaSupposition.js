"use strict";

const MetaAssertion = require("../metaAssertion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const unqualifiedMetastatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedMetastatement!");

function verifyMetaSupposition(metaSuppositionNode, context) {
  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(metaSuppositionNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context),
        metaSuppositionVerified = unqualifiedMetastatementVerified;  ///

  if (metaSuppositionVerified) {
    const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

    context.addMetaAssertion(metaAssertion);
  }

  return metaSuppositionVerified;
}

module.exports = verifyMetaSupposition;
