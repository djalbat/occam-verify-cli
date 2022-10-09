"use strict";

const Premise = require("../premise"),
      MetaAssertion = require("../metaAssertion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement");

function verifyPremiseOrPremises(premiseOrPremisesNode, premises, context) {
  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(premiseOrPremisesNode),
        premiseOrPremisesVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
          const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

          if (unqualifiedMetastatementVerified) {
            return true;
          }
        });

  if (premiseOrPremisesVerified) {
    unqualifiedMetastatementNodes.forEach((unqualifiedMetastatementNode) => {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode),
            premise = Premise.fromMetastatementNode(metastatementNode);

      context.addMetaAssertion(metaAssertion);

      premises.push(premise);
    });
  }

  return premiseOrPremisesVerified;
}

module.exports = verifyPremiseOrPremises;
