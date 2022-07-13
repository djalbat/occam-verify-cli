"use strict";

const log = require("../log");

const { nodeQuery } = require("../utilities/query"),
      { nameFromNameNode } = require("../utilities/node");

const nameNodeQuery = nodeQuery("/label/@*");  ///

function verifyLabels(labelNodes, labels, fileContext) {
  const labelsVerified = labelNodes.every((labelNode) => {
    const labelNameNode = nameNodeQuery(labelNode),
          labelName = nameFromNameNode(labelNameNode),
          label = labelName,  ///
          labelPresent = fileContext.isLabelPresent(label);

    if (labelPresent) {
      log.error(`The label ${label} is already present`);
    } else {
      labels.push(label);

      return true;
    }
  });

  return labelsVerified;
}

module.exports = verifyLabels;
