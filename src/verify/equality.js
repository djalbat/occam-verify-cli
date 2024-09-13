"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";
import EqualityAssignment from "../assignment/equality";

import { nodesQuery } from "../utilities/query";

const termNodesQuery = nodesQuery("/equality/term");

export default function verifyEquality(equalityNode, assignments, derived, localContext) {
  let equalityVerified;

  const equalityString = localContext.nodeAsString(equalityNode);

  localContext.trace(`Verifying the '${equalityString}' equality...`, equalityNode);

  const verifyEqualityFunctions = [
    verifyDerivedEquality,
    verifyStatedEquality
  ];

  equalityVerified = verifyEqualityFunctions.some((verifyEqualityFunction) => {
    const equalityVerified = verifyEqualityFunction(equalityNode, assignments, derived, localContext);

    if (equalityVerified) {
      return true;
    }
  });

  if (equalityVerified) {
    localContext.debug(`...verified the '${equalityString}' equality.`, equalityNode);
  }

  return equalityVerified;
}

function verifyDerivedEquality(equalityNode, assignments, derived, localContext) {
  let derivedEqualityVerified = false;

  if (derived) {
    const equalityString = localContext.nodeAsString(equalityNode);

    localContext.trace(`Verifying the '${equalityString}' derived equality...`, equalityNode);

    const terms = [],
          termNodes = termNodesQuery(equalityNode),
          termsVerified = verifyTerms(termNodes, terms, localContext, () => {
            let verifiedAhead = false;

            const equality = Equality.fromTermsAndEqualityNode(terms, equalityNode);

            if (equality !== null) {
              const equalityEqual = equality.isEqual(localContext);

              if (equalityEqual) {
                verifiedAhead = true;
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

function verifyStatedEquality(equalityNode, assignments, derived, localContext) {
  let statedEqualityVerified = false;

  if (!derived) {
    const equalityString = localContext.nodeAsString(equalityNode);

    localContext.trace(`Verifying the '${equalityString}' stated equality...`, equalityNode);

    const terms = [],
          termNodes = termNodesQuery(equalityNode),
          termsVerified = verifyTerms(termNodes, terms, localContext, () => {
            let verifiedAhead = false;

            const equality = Equality.fromTermsAndEqualityNode(terms, equalityNode);

            if (equality !== null) {
              const equalityAssignment = EqualityAssignment.fromEquality(equality),
                    assignment = equalityAssignment; ///

              assignments.push(assignment);

              verifiedAhead = true;
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
