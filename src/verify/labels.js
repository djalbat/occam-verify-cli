"use strict";

import verifyLabel from "../verify/label";

import { nodesQuery } from "../utilities/query";

const labelsMetavariableNodesQuery = nodesQuery("/labels/metavariable");

export default function verifyLabels(labelsNode, labels, fileContext) {
  let labelsVerified;

  if (labelsNode === null) {
    labelsVerified = true;
  } else {
    const labelsMetavariableNodes = labelsMetavariableNodesQuery(labelsNode);

    labelsVerified = labelsMetavariableNodes.every((labelsMetavariableNode) => {
      const labelVerified = verifyLabel(labelsMetavariableNode, labels, fileContext);

      if (labelVerified) {
        return true;
      }
    });
  }

  return labelsVerified;
}
