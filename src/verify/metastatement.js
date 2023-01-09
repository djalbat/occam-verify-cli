"use strict";

export default function verifyMetastatement(metastatementNode, metaproofContext) {
  let metastatementVerified;

  metaproofContext.begin(metastatementNode);

  metastatementVerified = true; ///

  metastatementVerified ?
    metaproofContext.complete(metastatementNode) :
      metaproofContext.halt(metastatementNode);

  return metastatementVerified;
}
