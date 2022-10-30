"use strict";

import { labelNameFromLabelNode } from "../utilities/query";

export default function verifyLabel(labelNode, labels, context = this) {
  let labelVerified = false;

  context.begin(labelNode);

  const labelName = labelNameFromLabelNode(labelNode),
        label = labelName,  ///
        labelPresent = context.isLabelPresent(label);

  if (labelPresent) {
    context.error(`The label ${label} is already present`, labelNode);
  } else {
    labels.push(label);

    labelVerified = true;
  }

  labelVerified ?
    context.complete(labelNode) :
      context.halt(labelNode);

  return labelVerified;
}
