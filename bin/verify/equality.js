"use strict";

const { arrayUtilities } = require("necessary");

const verifyTerm = require("../verify/term");

const { nodeQuery } = require("../utilities/query");

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

const { first, second } = arrayUtilities;

function verifyEquality(equalityNode, supposition, context) {
  let equalityVerified;

  const types = [],
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = verifyTerm(firstTermNode, types, supposition, context),
        secondTermVerified = verifyTerm(secondTermNode, types, supposition, context);

  if (!firstTermVerified || !secondTermVerified) {
    equalityVerified = false;
  } else {
    const firstType = first(types),
          secondType = second(types);

    if (firstType === secondType) {
      debugger
    }
  }

  return equalityVerified;
}

module.exports = verifyEquality;
