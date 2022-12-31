"use strict";

import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, proofContext) {
  let equalityVerified = false;

  proofContext.begin(equalityNode);

  const types = [],
        context = proofContext,
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = verifyTerm(firstTermNode, types, context),
        secondTermVerified = verifyTerm(secondTermNode, types, context);

  if (firstTermVerified && secondTermVerified) {
    const firstType = first(types),
          secondType = second(types),
          firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType = firstType.isEqualToSubTypeOfOrSuperTypeOf(secondType);

    if (firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType) {
      equalityVerified = true;
    }
  }

  equalityVerified ?
    proofContext.complete(equalityNode) :
      proofContext.halt(equalityNode);

  return equalityVerified;
}
