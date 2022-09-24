"use strict";

const { loggingUtilities } = require("necessary");

const verifyEquality = require("../verify/equality"),
      verifyTypeAssertion = require("../verify/typeAssertion");

const { nodeQuery } = require("../utilities/query"),
      { nodeAsString } = require("../utilities/node");

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

const { log } = loggingUtilities;

function verifyStatement(statementNode, supposition, context) {
  let statementVerified = false;

  const statementString = nodeAsString(statementNode);

  log.debug(`Verifying the ${statementString} statement...`);

  const equalityNode = equalityNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = verifyEquality(equalityNode, supposition, context);

    statementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, supposition, context);

    statementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  return statementVerified;
}

module.exports = verifyStatement;
