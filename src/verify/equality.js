"use strict";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, context = this) {
  let equalityVerified = false;

  context.begin(equalityNode);

  const types = [],
        values = [],
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = context.verifyTerm(firstTermNode, types, values),
        secondTermVerified = context.verifyTerm(secondTermNode, types, values);

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

  equalityVerified ?
    context.complete(equalityNode) :
      context.halt(equalityNode);

  return equalityVerified;
}

function equateTerms(firstTermNode, secondTermNode, context) {
  let termsEqual = true;  ///

  debugger

  return termsEqual;
}