"use strict";

export default function verifyMetastatement(metastatementNode, metaproofContext) {
  let statementVerified;

  metaproofContext.begin(metastatementNode);

  statementVerified = true; ///

  statementVerified ?
    metaproofContext.complete(metastatementNode) :
      metaproofContext.halt(metastatementNode);

  return statementVerified;
}
