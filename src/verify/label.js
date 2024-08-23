"use strict";

import Label from "../label";

export default function verifyLabel(labelsMetavariableNode, labels, fileContext) {
  let labelVerified = false;

  const labelMetavariableString = fileContext.nodeAsString(labelsMetavariableNode);

  fileContext.trace(`Verifying the '${labelMetavariableString}' label...`, labelsMetavariableNode);

  const labelPresent = fileContext.isLabelPresentByLabelMetavariableNode(labelsMetavariableNode);

  if (labelPresent) {
    fileContext.debug(`The '${labelMetavariableString}' label is already present.`, labelsMetavariableNode);
  } else {
    const metavariableNode = labelsMetavariableNode,  ///
          label = Label.fromMetavariableNode(metavariableNode);

    labels.push(label);

    labelVerified = true;
  }

  if (labelVerified) {
    fileContext.debug(`...verified the '${labelMetavariableString}' label.`, labelsMetavariableNode);
  }

  return labelVerified;
}
