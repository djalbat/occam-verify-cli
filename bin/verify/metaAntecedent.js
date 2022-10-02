"use strict";

const MetaAntecedent = require("../metaAntecedent"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/metaAntecedent/unqualifiedMetastatement");

function verifyMetaAntecedent(metaAntecedentNode, metaAntecedents, context) {
  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(metaAntecedentNode),
        metaAntecedentVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
          const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

          if (unqualifiedMetastatementVerified) {
            return true;
          }
        });

  if (metaAntecedentVerified) {
    const metastatementNodes = unqualifiedMetastatementNodes.map((unqualifiedMetastatementNode) => {
            const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

            return metastatementNode;
          }),
          metaAntecedent = MetaAntecedent.fromMetastatementNodes(metastatementNodes);

    metaAntecedents.push(metaAntecedent);
  }

  return metaAntecedentVerified;
}

module.exports = verifyMetaAntecedent;
