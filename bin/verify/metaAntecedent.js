"use strict";

const MetaAssertion = require("../metaAssertion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodesQuery } = require("../utilities/query");

const unqualifiedMetastatementNodesQuery = nodesQuery("/metaAntecedent/unqualifiedMetastatement");

function verifyMetaAntecedent(metaAntecedentNode, context) {
  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(metaAntecedentNode),
        metaAntecedentVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
          const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

          if (unqualifiedMetastatementVerified) {
            return true;
          }
        });

  if (metaAntecedentVerified) {
    unqualifiedMetastatementNodes.forEach((unqualifiedMetastatementNode) => {
      const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

      context.addMetaAssertion(metaAssertion);
    });
  }

  return metaAntecedentVerified;
}

module.exports = verifyMetaAntecedent;
