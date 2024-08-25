"use strict";

import Label from "../label";

export default function verifyLabel(metavariableNode, labels, fileContext) {
  let labelVerified = false;

  const labelMetavariableString = fileContext.nodeAsString(metavariableNode);

  fileContext.trace(`Verifying the '${labelMetavariableString}' label...`, metavariableNode);

  const labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);

  if (labelPresent) {
    fileContext.debug(`The '${labelMetavariableString}' label is already present.`, metavariableNode);
  } else {
    const label = Label.fromMetavariableNode(metavariableNode);

    labels.push(label);

    labelVerified = true;
  }

  if (labelVerified) {
    fileContext.debug(`...verified the '${labelMetavariableString}' label.`, metavariableNode);
  }

  return labelVerified;
}
