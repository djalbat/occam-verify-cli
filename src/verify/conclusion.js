"use strict";

import Conclusion from "../conclusion";

import { nodeQuery } from "../utilities/query";
import {nodeAsString} from "../utilities/string";

const metastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!/metastatement!");

export default function verifyConclusion(conclusionNode, conclusions, metaproofContext) {
  let conclusionVerified = false;

  metaproofContext.begin(conclusionNode);

  const conclusionString = nodeAsString(conclusionNode);

  metaproofContext.debug(`Verifying the '${conclusionString}' conclusion...`);

  const metastatementNode = metastatementNodeQuery(conclusionNode);

  if (metastatementNode !== null) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    conclusionVerified = true;
  }

  conclusionVerified ?
    metaproofContext.complete(conclusionNode) :
      metaproofContext.halt(conclusionNode);

  return conclusionVerified;
}
