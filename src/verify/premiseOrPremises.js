"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement/metastatement");

export default function verifyPremiseOrPremises(premiseOrPremisesNode, premises, metaproofContext) {
  let premiseOrPremisesVerified;

  metaproofContext.begin(premiseOrPremisesNode);

  const metastatementNodes = metastatementNodesQuery(premiseOrPremisesNode);

  premiseOrPremisesVerified = metastatementNodes.every((unqualifiedMetastatementNode) => {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
            premise = Premise.fromMetastatementNode(metastatementNode);

      premises.push(premise);

      metaproofContext.addMetaproofStep(metaproofStep);

      return true;
    }
  });

  premiseOrPremisesVerified ?
    metaproofContext.complete(premiseOrPremisesNode) :
      metaproofContext.halt(premiseOrPremisesNode);

  return premiseOrPremisesVerified;
}
