"use strict";

const log = require("../log");

const { labelNameFromLabelNode } = require("../utilities/query");

function verifyLabel(labelNode, labels, fileContext) {
  let labelVerified = false;

  const labelName = labelNameFromLabelNode(labelNode),
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
