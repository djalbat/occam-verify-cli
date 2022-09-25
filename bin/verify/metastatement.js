"use strict";

const { loggingUtilities } = require("necessary");

const verifyEquality = require("../verify/equality"),
      verifyTypeAssertion = require("../verify/typeAssertion");

const { nodeQuery } = require("../utilities/query"),
      { nodeAsString } = require("../utilities/string");

const equalityNodeQuery = nodeQuery("/metastatement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/metastatement/typeAssertion!");

const { log } = loggingUtilities;

function verifyMetastatement(metastatementNode, context) {
  let metastatementVerified = false;

  const metastatementString = nodeAsString(metastatementNode);

  log.debug(`Verifying the ${metastatementString} metastatement...`);

  const equalityNode = equalityNodeQuery(metastatementNode),
        typeAssertionNode = typeAssertionNodeQuery(metastatementNode);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = verifyEquality(equalityNode, context);

    metastatementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, context);

    metastatementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  return metastatementVerified;
}

module.exports = verifyMetastatement;
