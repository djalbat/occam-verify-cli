"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
    verifyLabels = require("../verify/labels"),
    verifyMetaproof = require("../verify/metaproof"),
    verifyUnqualifiedMetastatement = require("../verify/unqualifiedMetastatement");

const { nodeQuery, nodesQuery } = require("../utilities/query"),
    { labelsAsString, nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const metaproofDerivationQuery = nodeQuery("/metaproof/metaproof!");

function verifyMetaproof(metaproofNode, premiseMetastatementNodes, conclusionMetastatementNode, context) {
  let metaproofVerified = false;

  debugger

  return metaproofVerified;
}

module.exports = verifyMetaproof;
