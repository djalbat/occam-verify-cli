"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!");

export default function verifyPremise(premiseNode, premises, metaproofContext) {
  let premiseVerified;

  metaproofContext.begin(premiseNode);

  const premiseString = nodeAsString(premiseNode);

  metaproofContext.debug(`Verifying the ${premiseString} premise...`);

  const derived = false,
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(premiseNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, derived, metaproofContext);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
          premise = Premise.fromMetastatementNode(metastatementNode);

    premises.push(premise);

    metaproofContext.addMetaproofStep(metaproofStep);

    premiseVerified = true;
  }

  premiseVerified ?
    metaproofContext.complete(premiseNode) :
      metaproofContext.halt(premiseNode);

  return premiseVerified;
}
