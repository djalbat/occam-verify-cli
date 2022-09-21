"use strict";

const { arrayUtilities } = require("necessary");

const log = require("../log"),
      verifyTerm = require("../verify/term");

const { nodeQuery } = require("../utilities/query");

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

const { first, second } = arrayUtilities;

function verifyEquality(equalityNode, context) {
  let equalityVerified;

  const types = [],
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = verifyTerm(firstTermNode, types, context),
        secondTermVerified = verifyTerm(secondTermNode, types, context);

  if (!firstTermVerified || !secondTermVerified) {
    equalityVerified = false;
  } else {
    const firstType = first(types),
          secondType = second(types);

    debugger

    equalityVerified = true;
  }

  return equalityVerified;
}

module.exports = verifyEquality;
