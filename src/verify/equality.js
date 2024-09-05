"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";
import EqualityAssignment from "../assignment/equality";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";

const leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

export default function verifyEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
  let equalityVerified;

  const equalityString = localContext.nodeAsString(equalityNode);

  localContext.trace(`Verifying the '${equalityString}' equality...`, equalityNode);

  const verifyEqualityFunctions = [
    verifyDerivedEquality,
    verifyStatedEquality
  ];

  equalityVerified = verifyEqualityFunctions.some((verifyEqualityFunction) => {
    const equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, localContext, verifyAhead);

    if (equalityVerified) {
      return true;
    }
  });

  if (equalityVerified) {
    localContext.debug(`...verified the '${equalityString}' equality.`, equalityNode);
  }

  return equalityVerified;
}

function verifyDerivedEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
  let derivedEqualityVerified = false;

  if (derived) {
    const equalityString = localContext.nodeAsString(equalityNode);

    localContext.trace(`Verifying the '${equalityString}' derived equality...`, equalityNode);

    const terms = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termNodes = [
            leftTermNode,
            rightTermNode
          ],
          termsVerified = verifyTerms(termNodes, terms, localContext, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  secondTerm = second(terms),
                  leftTerm = firstTerm, ///
                  rightTerm = secondTerm, ///
                  equality = Equality.fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode);

            if (equality !== null) {
              const equalityEqual = equality.isEqual(localContext);

              if (equalityEqual) {
                const equalityAssignment = EqualityAssignment.fromEquality(equality),
                      assignment = equalityAssignment; ///

                assignments.push(assignment);

                verifiedAhead = verifyAhead();

                if (!verifiedAhead) {
                  assignments.pop();
                }
              }
            }

            return verifiedAhead;
          });

    derivedEqualityVerified = termsVerified; ///

    if (derivedEqualityVerified) {
      localContext.debug(`...verified the '${equalityString}' derived equality.`, equalityNode);
    }
  }

  return derivedEqualityVerified;
}

function verifyStatedEquality(equalityNode, assignments, derived, localContext, verifyAhead) {
  let statedEqualityVerified = false;

  if (!derived) {
    const equalityString = localContext.nodeAsString(equalityNode);

    localContext.trace(`Verifying the '${equalityString}' stated equality...`, equalityNode);

    const terms = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termNodes = [
            leftTermNode,
            rightTermNode
          ],
          termsVerified = verifyTerms(termNodes, terms, localContext, () => {
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

    statedEqualityVerified = termsVerified; ///

    if (statedEqualityVerified) {
      localContext.debug(`...verified the '${equalityString}' stated equality.`, equalityNode);
    }
  }

  return statedEqualityVerified;
}
