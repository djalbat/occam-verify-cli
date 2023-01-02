"use strict";

import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { first, second } from "../utilities/array";

const firstTermNodeQuery = nodeQuery("/equality/term[0]"),
      secondTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, proofContext) {
  let equalityVerified = false;

  proofContext.begin(equalityNode);

  const equalityString = nodeAsString(equalityNode);

  proofContext.debug(`Verifying the '${equalityString}' equality...`);

  const equalityTypesVerified = verifyEqualityTypes(equalityNode, proofContext);

  if (equalityTypesVerified) {
    const derived = proofContext.isDerived();

    if (derived) {
      debugger
    } else {
      equalityVerified = true;
    }
  }

  if (equalityVerified) {
    proofContext.info(`Verified the '${equalityString}' equality.`);
  }

  equalityVerified ?
    proofContext.complete(equalityNode) :
      proofContext.halt(equalityNode);

  return equalityVerified;
}

function verifyEqualityTypes(equalityNode, proofContext) {
  let equalityTypesVerified = false;

  const types = [],
        context = proofContext,  ///
        firstTermNode = firstTermNodeQuery(equalityNode),
        secondTermNode = secondTermNodeQuery(equalityNode),
        firstTermVerified = verifyTerm(firstTermNode, types, context),
        secondTermVerified = verifyTerm(secondTermNode, types, context);

  if (firstTermVerified && secondTermVerified) {
    const firstType = first(types),
          secondType = second(types),
          firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType = firstType.isEqualToSubTypeOfOrSuperTypeOf(secondType);

    if (firstTypeEqualToSubTypeOfOrSuperTypeOfSecondType) {
      equalityTypesVerified = true;
    }
  }

  return equalityTypesVerified;
}
