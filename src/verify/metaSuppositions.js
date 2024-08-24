"use strict";

import verifyMetaSupposition from "../verify/metaSupposition";

export default function verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localMetaContext) {
  let metaSuppositionsVerified;

  metaSuppositionsVerified = metaSuppositionNodes.every((metaSuppositionNode) => {
    const metaSuppositionVerified = verifyMetaSupposition(metaSuppositionNode, metaSuppositions, localMetaContext);

    if (metaSuppositionVerified) {
      return true;
    }
  });

  return metaSuppositionsVerified;
}
