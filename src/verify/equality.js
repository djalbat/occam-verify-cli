"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";

export default function verifyEquality(equalityNode, assignments, derived, context, verifyAhead) {
  let equalityVerified;

  const equalityString = context.nodeAsString(equalityNode);

  context.trace(`Verifying the '${equalityString}' equality...`, equalityNode);

  const verifyStatementAsEqualityFunctions = [
    verifyDerivedEquality,
    verifyStandaloneEquality
  ];

  equalityVerified = verifyStatementAsEqualityFunctions.some((verifyStatementAsEqualityFunction) => {
    const statementVerified = verifyStatementAsEqualityFunction(equalityNode, derived, context, verifyAhead);

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
  let verifiedStatementAsDerivedEquality = false;

  if (derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' derived equality...`, equalityNode);

    const equality = Equality.fromEqualityNode(equalityNode),
          equalities = context.getEqualities(),
          equalityVerified = equality.verify(equalities, context, verifyAhead);

    verifiedStatementAsDerivedEquality = equalityVerified;  ///

    if (verifiedStatementAsDerivedEquality) {
      context.debug(`...verified the '${equalityString}' derived equality.`, equalityNode);
    }
  }

  return verifiedStatementAsDerivedEquality;
}

function verifyStandaloneEquality(equalityNode, derived, context, verifyAhead) {
  let statementVerifiedAsStandaloneEquality = false;

  if (!derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' standalone equality...`, equalityNode);

    const equality = Equality.fromEqualityNode(equalityNode),
          leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode(),
          termsVerified = verifyTerms(leftTermNode, rightTermNode, context, verifyAhead);

    statementVerifiedAsStandaloneEquality = termsVerified; ///

    if (statementVerifiedAsStandaloneEquality) {
      context.trace(`...verified the '${equalityString}' standalone equality.`, equalityNode);
    }
  }

  return statementVerifiedAsStandaloneEquality;
}
