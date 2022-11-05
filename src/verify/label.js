"use strict";

import Label from "../label";

import { nodeAsString } from "../utilities/string";
import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  fileContext.begin(labelNode);

  const labelName = labelNameFromLabelNode(labelNode),
        labelPresent = fileContext.isLabelPresentByLabelName(labelName);

  if (labelPresent) {
    const labelString = nodeAsString(labelNode);

    fileContext.error(`The '${labelString}' label is already present.`, labelNode);
  } else {
    const label = Label.fromLabelNode(labelNode);

    labels.push(label);

    labelVerified = true;
  }

  labelVerified ?
    fileContext.complete(labelNode) :
      fileContext.halt(labelNode);

  return labelVerified;
}
