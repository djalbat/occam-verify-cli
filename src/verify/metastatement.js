"use strict";

export default function verifyMetastatement(metastatementNode, assertions, derived, metaproofContext) {
  let metastatementVerified = true; ///

  metaproofContext.begin(metastatementNode);

  ///

  metastatementVerified ?
    metaproofContext.complete(metastatementNode) :
      metaproofContext.halt(metastatementNode);

  return metastatementVerified;
}
