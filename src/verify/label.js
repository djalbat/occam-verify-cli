"use strict";

import Label from "../label";

import { nodeQuery } from "../utilities/query";

const metavariableNodeQuery = nodeQuery("/label/metavariable!");

export default function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelString = fileContext.nodeAsString(labelNode);

  fileContext.trace(`Verifying the '${labelString}' label...`, labelNode);

  const metavariableNode = metavariableNodeQuery(labelNode),
        labelPresent = fileContext.isLabelPresentByMetavariableNode(metavariableNode);

  if (labelPresent) {
    fileContext.debug(`The '${labelString}' label is already present.`, labelNode);
  } else {
    const label = Label.fromMetavariableNode(metavariableNode);

    labels.push(label);

    labelVerified = true;
  }

  if (labelVerified) {
    fileContext.debug(`...verified the '${labelString}' label.`, labelNode);
  }

  return labelVerified;
}
