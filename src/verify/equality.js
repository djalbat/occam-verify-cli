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
    verifyGivenEquality
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
                  equality = Equality.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);

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

function verifyGivenEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let givenEqualityVerified = false;

  if (!derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' given equality...`, equalityNode);

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
                  equality = Equality.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);

            if (equality !== null) {
              const equalityAssignment = EqualityAssignment.fromEquality(equality),
                    assignment = equalityAssignment; ///

              assignments.push(assignment);

              verifiedAhead = verifyAhead();

              if (!verifiedAhead) {
                assignments.pop();
              }
            }

            return verifiedAhead;
          });

    givenEqualityVerified = termsVerified; ///

    if (givenEqualityVerified) {
      context.trace(`...verified the '${equalityString}' given equality.`, equalityNode);
    }
  }

  return givenEqualityVerified;
}
