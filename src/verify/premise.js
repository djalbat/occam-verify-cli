"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!");

export default function verifyPremise(premiseNode, premises, metaproofContext) {
  let premiseVerified;

  const premiseString = metaproofContext.nodeAsString(premiseNode);

  metaproofContext.debug(`Verifying the '${premiseString}' premise...`, premiseNode);

  const derived = false,
        assertions = [],
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assertions, derived, metaproofContext);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
          premise = Premise.fromMetastatementNode(metastatementNode);

    premises.push(premise);

    metaproofContext.addMetaproofStep(metaproofStep);

    premiseVerified = true;
  }

  return premiseVerified;
}
