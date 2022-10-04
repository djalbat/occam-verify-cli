"use strict";

const verifyTerm = require("../verify/term");

const { nodeQuery } = require("../utilities/query"),
      { first, second } = require("../utilities/array");

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

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
          secondType = second(types),
          firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType = firstType.isEqualToSubTypeOfOrSuperTypeOf(secondType);

    if (firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType) {
      const derived = context.isDerived();

      if (derived) {
        const termsEqual = equateTerms(firstTermNode, secondTermNode, context);

        if (termsEqual) {
          equalityVerified = true;
        }
      } else {
        equalityVerified = true;
      }
    }
  }

  return equalityVerified;
}

module.exports = verifyEquality;

function equateTerms(firstTermNode, secondTermNode, context) {
  let termsEqual = true;  ///

  debugger

  return termsEqual;
}