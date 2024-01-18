"use strict";

import verifyPremise from "../verify/premise";

export default function verifyPremises(premiseNodes, premises, localMetaContext) {
  let premisesVerified;

  premisesVerified = premiseNodes.every((premiseNode) => {
    const premiseVerified = verifyPremise(premiseNode, premises, localMetaContext);

    if (premiseVerified) {
      return true;
    }
  });

  return premisesVerified;
}
