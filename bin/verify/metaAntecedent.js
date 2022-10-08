"use strict";

const verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

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

  return metaAntecedentVerified;
}

module.exports = verifyMetaAntecedent;
