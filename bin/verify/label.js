"use strict";

const log = require("../log");

const { nodeQuery } = require("../utilities/query"),
      { nameFromNameNode } = require("../utilities/node");

const nameNodeQuery = nodeQuery("/label/@*");  ///

function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelNameNode = nameNodeQuery(labelNode),
        labelName = nameFromNameNode(labelNameNode),
        label = labelName,  ///
        labelPresent = fileContext.isLabelPresent(label);

  if (labelPresent) {
    log.error(`The label ${label} is already present`);
  } else {
    labels.push(label);

    labelVerified = true;
  }

  return labelVerified;
}

module.exports = verifyLabel;
