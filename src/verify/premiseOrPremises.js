"use strict";

import Premise from "../premise";
import MetaAssertion from "../metaAssertion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement");

export default function verifyPremiseOrPremises(premiseOrPremisesNode, premises, context) {
  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(premiseOrPremisesNode),
        premiseOrPremisesVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
          const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

          if (unqualifiedMetastatementVerified) {
            const metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode);

            context.addMetaAssertion(metaAssertion);

            return true;
          }
        });

  if (premiseOrPremisesVerified) {
    unqualifiedMetastatementNodes.forEach((unqualifiedMetastatementNode) => {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            premise = Premise.fromMetastatementNode(metastatementNode);

      premises.push(premise);
    });
  }

  return premiseOrPremisesVerified;
}
