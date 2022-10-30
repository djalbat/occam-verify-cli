"use strict";

export default function verifyLabels(labelNodes, labels, context = this) {
  let labelsVerified;

  labelsVerified = labelNodes.every((labelNode) => {
    const labelVerified = context.verifyLabel(labelNode, labels);

    if (labelVerified) {
      return true;
    }
  });

  return labelsVerified;
}
