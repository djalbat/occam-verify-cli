"use strict";

const verifyLabel = require("../verify/label");

function verifyLabels(labelNodes, labels, fileContext) {
  const labelsVerified = labelNodes.every((labelNode) => {
    const labelVerified = verifyLabel(labelNode, labels, fileContext);

    if (labelVerified) {
      return true;
    }
  });

  return labelsVerified;
}

module.exports = verifyLabels;
