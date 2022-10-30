"use strict";

import Premise from "../premise";
import MetaAssertion from "../metaAssertion";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement"),
      unqualifiedMetastatementNodesQuery = nodesQuery("/premise|premises/unqualifiedMetastatement");

export default function verifyPremiseOrPremises(premiseOrPremisesNode, premises, context = this) {
  let premiseOrPremisesVerified;

  context.begin(premiseOrPremisesNode);

  const unqualifiedMetastatementNodes = unqualifiedMetastatementNodesQuery(premiseOrPremisesNode);

  premiseOrPremisesVerified = unqualifiedMetastatementNodes.every((unqualifiedMetastatementNode) => {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            metaAssertion = MetaAssertion.fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode),
            premise = Premise.fromMetastatementNode(metastatementNode);

      premises.push(premise);

      context.addMetaAssertion(metaAssertion);

      return true;
    }
  });

  premiseOrPremisesVerified ?
    context.complete(premiseOrPremisesNode) :
      context.halt(premiseOrPremisesNode);

  return premiseOrPremisesVerified;
}
