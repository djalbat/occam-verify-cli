"use strict";

import MetaproofStep from "../step/metaproof";
import MetaSupposition from "../metaSupposition";
import verifyMetastatement from "./metastatement";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const metastatementNodeQuery = nodeQuery("/metaSupposition/unqualifiedMetastatement!/metastatement!");

export default function verifyMetaSupposition(metaSuppositionNode, metaSuppositions, metaproofContext) {
  let metaSuppositionVerified;

  metaproofContext.begin(metaSuppositionNode);

  const metaSuppositionString = nodeAsString(metaSuppositionNode);

  metaproofContext.debug(`Verifying the ${metaSuppositionString} metaSupposition...`);

  const metastatementNode = metastatementNodeQuery(metaSuppositionNode);

  if (metastatementNode !== null) {
    const qualified = false,
          metastatementVerified = verifyMetastatement(metastatementNode, qualified, metaproofContext);

    if (metastatementVerified) {
      const metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode),
            metaSupposition = MetaSupposition.fromMetastatementNode(metastatementNode);

      metaSuppositions.push(metaSupposition);

      metaproofContext.addMetaproofStep(metaproofStep);
    }

    metaSuppositionVerified = true;
  }

  metaSuppositionVerified ?
    metaproofContext.complete(metaSuppositionNode) :
      metaproofContext.halt(metaSuppositionNode);

  return metaSuppositionVerified;
}
