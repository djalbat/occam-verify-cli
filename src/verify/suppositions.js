"use strict";

import verifySupposition from "../verify/supposition";

export default function verifySuppositions(suppositionNodes, suppositions, localContext) {
  let suppositionsVerified;

  const assignments = [];

  suppositionsVerified = suppositionNodes.every((suppositionNode) => {
    const suppositionVerified = verifySupposition(suppositionNode, suppositions, assignments, localContext);

    if (suppositionVerified) {
      return true;
    }
  });

  if (suppositionsVerified) {
    suppositionsVerified = assignments.every((assignment) => {  ///
      const assigned = assignment.assign(localContext);

      if (assigned) {
        return true;
      }
    });
  }

  return suppositionsVerified;
}
