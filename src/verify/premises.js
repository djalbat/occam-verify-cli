"use strict";

import verifyPremise from "../verify/premise";

export default function verifyPremises(premiseNodes, premises, localContext) {
  let premisesVerified;

  premisesVerified = premiseNodes.every((premiseNode) => {
    const premiseVerified = verifyPremise(premiseNode, premises, localContext);

    if (premiseVerified) {
      return true;
    }
  });

  return premisesVerified;
}
