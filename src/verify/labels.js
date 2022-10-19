"use strict";

import verifyLabel from "../verify/label";

export default function verifyLabels(labelNodes, labels, context) {
  const labelsVerified = labelNodes.every((labelNode) => {
    const labelVerified = verifyLabel(labelNode, labels, context);

    if (labelVerified) {
      return true;
    }
  });

  return labelsVerified;
}
