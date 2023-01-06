"use strict";

import Equality from "../equality";
import verifyTerm from "../verify/term";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { first, second } from "../utilities/array";
import { MAXIMUM_INDEXES_LENGTH } from "../constants";

const leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, proofContext) {
  let equalityVerified = false;

  proofContext.begin(equalityNode);

  const equalityString = nodeAsString(equalityNode);

  proofContext.debug(`Verifying the '${equalityString}' equality...`);

  const equalityTypesVerified = verifyEqualityTypes(equalityNode, proofContext);

  if (equalityTypesVerified) {
    const derived = proofContext.isDerived();

    if (derived) {
      const equality = Equality.fromEqualityNode(equalityNode),
            proofSteps = proofContext.getProofSteps(),
            equalities = equalitiesFromProofSteps(proofSteps),
            equalityEquates = equality.equate(equalities, proofContext);

      equalityVerified = equalityEquates;  ///
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
        leftTermNode = leftTermNodeQuery(equalityNode),
        rightTermNode = rightTermNodeQuery(equalityNode),
        leftTermVerified = verifyTerm(leftTermNode, types, context),
        rightTermVerified = verifyTerm(rightTermNode, types, context);

  if (leftTermVerified && rightTermVerified) {
    const firstType = first(types),
          secondType = second(types),
          leftType = firstType, ///
          rightType = secondType, ///
          leftTypeEqualToSubTypeOfOrSuperTypeOfRightType = leftType.isEqualToSubTypeOfOrSuperTypeOf(rightType);

    if (leftTypeEqualToSubTypeOfOrSuperTypeOfRightType) {
      equalityTypesVerified = true;
    }
  }

  return equalityTypesVerified;
}

function equalitiesFromProofSteps(proofSteps) {
  const start = -MAXIMUM_INDEXES_LENGTH;  ///

  proofSteps = proofSteps.slice(start); ///

  const equalities = proofSteps.reduce((equalities, proofStep, index) => {
    const equality = Equality.fromProofStep(proofStep);

    if (equality !== null) {
      equalities.push(equality);
    }

    return equalities;
  }, []);

  return equalities;
}
