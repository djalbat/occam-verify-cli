"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";

import { first, second } from "../utilities/array";

export default function verifyEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let equalityVerified;

  const equalityString = context.nodeAsString(equalityNode);

  context.trace(`Verifying the '${equalityString}' equality...`, equalityNode);

  const verifyEqualityFunctions = [
    verifyDerivedEquality,
    verifyStandaloneEquality
  ];

  equalityVerified = verifyEqualityFunctions.some((verifyEqualityFunction) => {
    const statementVerified = verifyEqualityFunction(equalityNode, derived, context, verifyAhead);

    if (statementVerified) {
      return true;
    }
  });

  if (equalityVerified) {
    context.debug(`...verified the '${equalityString}' equality.`, equalityNode);
  }

  return equalityVerified;
}

function verifyDerivedEquality(equalityNode, derived, context, verifyAhead) {
  let derivedEqualityVerified = false;

  if (derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' derived equality...`, equalityNode);

    debugger

    // const equality = Equality.fromEqualityNode(equalityNode),
    //       equalities = context.getEqualities(),
    //       equalityVerified = equality.verify(equalities, context, verifyAhead);
    //
    // derivedEqualityVerified = equalityVerified;  ///

    if (derivedEqualityVerified) {
      context.debug(`...verified the '${equalityString}' derived equality.`, equalityNode);
    }
  }

  return derivedEqualityVerified;
}

function verifyStandaloneEquality(equalityNode, derived, context, verifyAhead) {
  let standaloneEqualityVerified = false;

  if (!derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' standalone equality...`, equalityNode);

    const types = [],
          equality = Equality.fromEqualityNode(equalityNode),
          leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode(),
          termsVerified = verifyTerms(leftTermNode, rightTermNode, types, context, () => {
            let verifiedAhead;

            const firstType = first(types),
                  secondType = second(types),
                  leftType = firstType, ///
                  rightType = secondType, ///
                  leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

            if (leftTermNodeMatchesRightTermNode) {
              const termNode = leftTermNode,  ///
                    type = leftType;

              debugger
            } else {

            }

            verifiedAhead = verifiedAhead();

            return verifiedAhead;
          });

    standaloneEqualityVerified = termsVerified; ///

    if (standaloneEqualityVerified) {
      context.trace(`...verified the '${equalityString}' standalone equality.`, equalityNode);
    }
  }

  return standaloneEqualityVerified;
}
