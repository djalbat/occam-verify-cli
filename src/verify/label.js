"use strict";

import Label from "../label";

import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelName = labelNameFromLabelNode(labelNode),
        labelPresent = fileContext.isLabelPresentByLabelName(labelName);

  if (labelPresent) {
    const labelString = fileContext.nodeAsString(labelNode);

    fileContext.error(`The '${labelString}' label is already present.`, labelNode);
  } else {
    const label = Label.fromLabelNode(labelNode);

    labels.push(label);

    labelVerified = true;
  }

  return labelVerified;
}
