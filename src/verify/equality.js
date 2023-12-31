"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";
import EqualityAssignment from "../assignment/equality";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const leftTermNodeQuery = nodeQuery("/equality/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/equality/argument[1]/term!");

export default function verifyEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let equalityVerified;

  const equalityString = context.nodeAsString(equalityNode);

  context.trace(`Verifying the '${equalityString}' equality...`, equalityNode);

  const verifyEqualityFunctions = [
    verifyDerivedEquality,
    verifyStandaloneEquality
  ];

  equalityVerified = verifyEqualityFunctions.some((verifyEqualityFunction) => {
    const equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, context, verifyAhead);

    if (equalityVerified) {
      return true;
    }
  });

  if (equalityVerified) {
    context.debug(`...verified the '${equalityString}' equality.`, equalityNode);
  }

  return equalityVerified;
}

function verifyDerivedEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let derivedEqualityVerified = false;

  if (derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' derived equality...`, equalityNode);

    const terms = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termNodes = [
            leftTermNode,
            rightTermNode
          ],
          termsVerified = verifyTerms(termNodes, terms, context, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  secondTerm = second(terms),
                  leftTerm = firstTerm, ///
                  rightTerm = secondTerm, ///
                  equality = Equality.fromLeftTermAndRightTerm(leftTerm, rightTerm);

            if (equality !== null) {
              const equalityEqual = context.isEqualityEqual(equality);

              if (equalityEqual) {
                verifiedAhead = verifyAhead();
              }
            }

            return verifiedAhead;
          });

    derivedEqualityVerified = termsVerified; ///

    if (derivedEqualityVerified) {
      context.trace(`...verified the '${equalityString}' derived equality.`, equalityNode);
    }
  }

  return derivedEqualityVerified;
}

function verifyStandaloneEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let standaloneEqualityVerified = false;

  if (!derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' standalone equality...`, equalityNode);

    const terms = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termNodes = [
            leftTermNode,
            rightTermNode
          ],
          termsVerified = verifyTerms(termNodes, terms, context, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  secondTerm = second(terms),
                  leftTerm = firstTerm, ///
                  rightTerm = secondTerm, ///
                  equality = Equality.fromLeftTermAndRightTerm(leftTerm, rightTerm);

            if (equality !== null) {
              const equalityAssignment = EqualityAssignment.fromEquality(equality),
                    assignment = equalityAssignment; ///

              assignments.push(assignment);

              verifiedAhead = verifyAhead();
            }

            return verifiedAhead;
          });

    standaloneEqualityVerified = termsVerified; ///

    if (standaloneEqualityVerified) {
      context.trace(`...verified the '${equalityString}' standalone equality.`, equalityNode);
    }
  }

  return standaloneEqualityVerified;
}
