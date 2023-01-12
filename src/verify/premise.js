"use strict";

import Premise from "../premise";
import MetaproofStep from "../step/metaproof";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const metastatementNodeQuery = nodeQuery("/premise/unqualifiedMetastatement!/metastatement!");

export default function verifyPremise(premiseNode, premises, metaproofContext) {
  let premiseVerified;

  metaproofContext.begin(premiseNode);

  const premiseString = nodeAsString(premiseNode);

  metaproofContext.debug(`Verifying the ${premiseString} premise...`);

  const metastatementNode = metastatementNodeQuery(premiseNode);

  if (metastatementNode !== null) {
    const metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
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
