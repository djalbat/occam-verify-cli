"use strict";

const Premise = require("../premise"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement");

function verifyPremise(premiseNode, premises, context) {
  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(premiseNode),
        premiseVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
          const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

          if (unqualifiedMetastatementVerified) {
            return true;
          }
        });

  if (premiseVerified) {
    const metastatementNodes = unqualifiedMetastatementNodes.map((unqualifiedMetastatementNode) => {
            const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

            return metastatementNode;
          }),
          premise = Premise.fromMetastatementNodes(metastatementNodes);

    premises.push(premise);
  }

  return premiseVerified;
}

module.exports = verifyPremise;
