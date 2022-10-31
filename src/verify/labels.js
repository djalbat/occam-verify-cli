"use strict";

import verifyLabel from "../verify/label";

export default function verifyLabels(labelNodes, labels, fileContext) {
  let labelsVerified;

  labelsVerified = labelNodes.every((labelNode) => {
    const labelVerified = verifyLabel(labelNode, labels, fileContext);

    if (labelVerified) {
      return true;
    }
  });

  return labelsVerified;
}
