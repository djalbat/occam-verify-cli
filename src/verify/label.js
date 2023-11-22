"use strict";

import Label from "../label";

import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelName = labelNameFromLabelNode(labelNode),
        labelString = fileContext.nodeAsString(labelNode);

  fileContext.trace(`Verifying the '${labelString}' label...`, labelNode);

  const labelPresent = fileContext.isLabelPresentByLabelName(labelName);

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
