"use strict";

import Label from "../label";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelString = fileContext.nodeAsString(labelNode);

  fileContext.trace(`Verifying the '${labelString}' label...`, labelNode);

  const labelPresent = fileContext.isLabelPresentByLabelNode(labelNode);

  if (labelPresent) {
    const labelString = fileContext.nodeAsString(labelNode);

    fileContext.debug(`The '${labelString}' label is already present.`, labelNode);
  } else {
    const label = Label.fromLabelNode(labelNode);

    labels.push(label);

    labelVerified = true;
  }

  if (labelVerified) {
    fileContext.debug(`...verified the '${labelString}' label.`, labelNode);
  }

  return labelVerified;
}
