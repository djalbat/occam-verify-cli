"use strict";

const { loggingUtilities } = require("necessary");

const { labelNameFromLabelNode } = require("../utilities/query");

const { log } = loggingUtilities;

function verifyLabel(labelNode, labels, context) {
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

module.exports = verifyLabel;
