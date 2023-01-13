"use strict";

import MetaproofStep from "../step/metaproof";
import MetaAntecedent from "../metaAntecedent";
import verifyMetastatement from "./metastatement";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const metastatementNodeQuery = nodeQuery("/metaAntecedent/unqualifiedMetastatement!/metastatement!");

export default function verifyMetaAntecedent(metaAntecedentNode, metaAntecedents, metaproofContext) {
  let metaAntecedentVerified;

  metaproofContext.begin(metaAntecedentNode);

  const metaAntecedentString = nodeAsString(metaAntecedentNode);

  metaproofContext.debug(`Verifying the ${metaAntecedentString} metaAntecedent...`);

  const metastatementNode = metastatementNodeQuery(metaAntecedentNode);

  if (metastatementNode !== null) {
    const qualified = false,
          metastatementVerified = verifyMetastatement(metastatementNode, qualified, metaproofContext);

    if (metastatementVerified) {
      const metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
            metaAntecedent = MetaAntecedent.fromMetastatementNode(metastatementNode);

      metaAntecedents.push(metaAntecedent);

      metaproofContext.addMetaproofStep(metaproofStep);
    }

    metaAntecedentVerified = true;
  }

  metaAntecedentVerified ?
    metaproofContext.complete(metaAntecedentNode) :
      metaproofContext.halt(metaAntecedentNode);

  return metaAntecedentVerified;
}
