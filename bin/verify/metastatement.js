"use strict";

const { loggingUtilities } = require("necessary");

const { nodeAsString } = require("../utilities/string");

const { log } = loggingUtilities;

function verifyMetastatement(metastatementNode, context) {
  const metastatementString = nodeAsString(metastatementNode),
        metastatementVerified = true;

  log.debug(`Verifying the ${metastatementString} metastatement...`);

  return metastatementVerified;
}

module.exports = verifyMetastatement;
