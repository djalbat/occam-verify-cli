"use strict";

const { nodeQuery } = require("../utilities/query");

const verifyEquality = require("../verify/equality"),
      verifyTypeAssertion = require("../verify/typeAssertion");

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, fileContext) {
  let statementVerified = false;

  const equalityNode = equalityNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = verifyEquality(equalityNode, fileContext);

    statementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, fileContext);

    statementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  return statementVerified;
}

module.exports = verifyStatement;
