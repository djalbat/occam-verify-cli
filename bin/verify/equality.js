"use strict";

const { arrayUtilities } = require("necessary");

const verifyTerm = require("../verify/term");

const { nodeQuery } = require("../utilities/query");

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

const { first, second } = arrayUtilities;

function verifyEquality(equalityNode, context) {
  let equalityVerified = false;

  const types = [],
        values = [],
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = verifyTerm(firstTermNode, types, values, context),
        secondTermVerified = verifyTerm(secondTermNode, types, values, context);

  if (firstTermVerified && secondTermVerified) {
    const firstType = first(types),
          secondType = second(types);

    if (firstType === secondType) {
      const antecedent = context.isAntecedent(),
            consequent = context.isConsequent();

      if (antecedent || consequent) {
        equalityVerified = true;
      } else {
        debugger
      }
    }
  }

  return equalityVerified;
}

module.exports = verifyEquality;
