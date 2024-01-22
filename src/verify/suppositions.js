"use strict";

import verifySupposition from "../verify/supposition";

export default function verifySuppositions(suppositionNodes, suppositions, localContext) {
  let suppositionsVerified;

  suppositionsVerified = suppositionNodes.every((suppositionNode) => {
    const suppositionVerified = verifySupposition(suppositionNode, suppositions, localContext);

    if (suppositionVerified) {
      return true;
    }
  });

  return suppositionsVerified;
}
