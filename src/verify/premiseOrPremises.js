"use strict";

import Premise from "../premise";
import MetaAssertion from "../metaAssertion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement");

export default function verifyPremiseOrPremises(premiseOrPremisesNode, premises, metaproofContext) {
  let premiseOrPremisesVerified;

  metaproofContext.begin(premiseOrPremisesNode);

  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(premiseOrPremisesNode);

  premiseOrPremisesVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, metaproofContext);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode),
            premise = Premise.fromMetastatementNode(metastatementNode);

      premises.push(premise);

      metaproofContext.addMetaAssertion(metaAssertion);

      return true;
    }
  });

  premiseOrPremisesVerified ?
    metaproofContext.complete(premiseOrPremisesNode) :
      metaproofContext.halt(premiseOrPremisesNode);

  return premiseOrPremisesVerified;
}
