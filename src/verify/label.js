"use strict";

import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  fileContext.begin(labelNode);

  const labelName = labelNameFromLabelNode(labelNode),
        label = labelName,  ///
        labelPresent = fileContext.isLabelPresent(label);

  if (labelPresent) {
    fileContext.error(`The label ${label} is already present`, labelNode);
  } else {
    labels.push(label);

    labelVerified = true;
  }

  labelVerified ?
    fileContext.complete(labelNode) :
      fileContext.halt(labelNode);

  return labelVerified;
}
