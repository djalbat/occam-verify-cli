"use strict";

import { loggingUtilities } from "necessary";

import { labelNameFromLabelNode } from "../utilities/query";

const { log } = loggingUtilities;

export default function verifyLabel(labelNode, labels, context) {
  let labelVerified = false;

  const labelName = labelNameFromLabelNode(labelNode),
        label = labelName,  ///
        labelPresent = context.isLabelPresent(label);

  if (labelPresent) {
    log.error(`The label ${label} is already present`);
  } else {
    labels.push(label);

    labelVerified = true;
  }

  return labelVerified;
}
