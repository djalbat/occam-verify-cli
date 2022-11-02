"use strict";

import Label from "../label";

import { nodesAsString } from "../utilities/string";
import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  fileContext.begin(labelNode);

  const labelName = labelNameFromLabelNode(labelNode),
        labelPresent = fileContext.isLabelPresentByLabelName(labelName);

  if (labelPresent) {
    const labelString = nodesAsString(labelNode);

    fileContext.error(`The label ${labelString} is already present`, labelNode);
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
