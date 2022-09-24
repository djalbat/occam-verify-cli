"use strict";

const verifyLabel = require("../verify/label");

function verifyLabels(labelNodes, labels, context) {
  const labelsVerified = labelNodes.every((labelNode) => {
    const labelVerified = verifyLabel(labelNode, labels, context);

    if (labelVerified) {
      return true;
    }
  });

  return labelsVerified;
}

module.exports = verifyLabels;
