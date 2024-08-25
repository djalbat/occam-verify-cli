"use strict";

import verifyLabel from "../verify/label";

import { nodesQuery } from "../utilities/query";

const labelsMetavariableNodesQuery = nodesQuery("/labels/metavariable");

export default function verifyLabels(labelsNode, labels, fileContext) {
  let labelsVerified;

  if (labelsNode === null) {
    labelsVerified = true;
  } else {
    const labelsMetavariableNodes = labelsMetavariableNodesQuery(labelsNode),
          metavariableNodes = labelsMetavariableNodes;  ///

    labelsVerified = metavariableNodes.every((metavariableNode) => {
      const labelVerified = verifyLabel(metavariableNode, labels, fileContext);

      if (labelVerified) {
        return true;
      }
    });
  }

  return labelsVerified;
}
