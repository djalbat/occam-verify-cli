"use strict";

import verifyMetaSupposition from "../verify/metaSupposition";

export default function verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, substitutions, localContext) {
  let metaSuppositionsVerified;

  metaSuppositionsVerified = metaSuppositionNodes.every((metaSuppositionNode) => {
    const metaSuppositionVerified = verifyMetaSupposition(metaSuppositionNode, metaSuppositions, localContext);

    if (metaSuppositionVerified) {
      return true;
    }
  });

  return metaSuppositionsVerified;
}
