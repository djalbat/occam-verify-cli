"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!");

export default function verifyPremise(premiseNode, premises, localMetaContext) {
  let premiseVerified;

  const premiseString = localMetaContext.nodeAsString(premiseNode);

  localMetaContext.trace(`Verifying the '${premiseString}' premise...`, premiseNode);

  const derived = false,
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, localMetaContext);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
          premise = Premise.fromMetastatementNode(metastatementNode);

    premises.push(premise);

    localMetaContext.addMetaproofStep(metaproofStep);

    premiseVerified = true;
  }

  if (premiseVerified) {
    localMetaContext.debug(`...verified the '${premiseString}' premise.`, premiseNode);
  }

  return premiseVerified;
}
