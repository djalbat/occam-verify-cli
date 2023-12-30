"use strict";

import verifyTerms from "../verify/terms";

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
    const equalityVerified = verifyEqualityFunction(equalityNode, derived, context, verifyAhead);

    if (equalityVerified) {
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

    const types = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termsVerified = verifyTerms(leftTermNode, rightTermNode, types, context, () => {
            let verifiedAhead;

            const secondType = second(types),
                  firstType = first(types),
                  rightType = secondType, ///
                  leftType = firstType, ///
                  derivedEqualityTermsVerified = verifyDerivedEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead);

            verifiedAhead = derivedEqualityTermsVerified;  ///

            return verifiedAhead;
          });

    derivedEqualityVerified = termsVerified; ///

    if (derivedEqualityVerified) {
      context.trace(`...verified the '${equalityString}' derived equality.`, equalityNode);
    }
  }

  return derivedEqualityVerified;
}

function verifyDerivedEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let derivedEqualityTermsVerified;

  const leftTermString = context.nodeAsString(leftTermNode),
        rightTermString = context.nodeAsString(rightTermNode);

  context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' derived equality terms...`, leftTermNode);

  const verifyDerivedEqualityTermsFunctions = [
    verifyReflexiveDerivedEqualityTerms,
    verifyNonReflexiveDerivedEqualityTerms
  ];

  derivedEqualityTermsVerified = verifyDerivedEqualityTermsFunctions.some((verifyDerivedEqualityTermsFunction) => {
    derivedEqualityTermsVerified = verifyDerivedEqualityTermsFunction(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead);

    if (derivedEqualityTermsVerified) {
      return true;
    }
  });

  if (derivedEqualityTermsVerified) {
    context.debug(`...verified the '${leftTermString}' and '${rightTermString}' derived equality terms.`, leftTermNode);
  }

  return derivedEqualityTermsVerified;
}

function verifyReflexiveDerivedEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let reflexiveDerivedEqualityTermsVerified = false;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (leftTermNodeMatchesRightTermNode) {
    let verifiedAhead;

    const leftTermString = context.nodeAsString(leftTermNode),
          rightTermString = context.nodeAsString(rightTermNode);

    context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' reflexive derived equality terms...`, leftTermNode);

    verifiedAhead = verifyAhead();

    reflexiveDerivedEqualityTermsVerified = verifiedAhead; ///

    if (reflexiveDerivedEqualityTermsVerified) {
      context.debug(`...verified the '${leftTermString}' and '${rightTermString}' reflexive derived equality terms.`, leftTermNode);
    }
  }

  return reflexiveDerivedEqualityTermsVerified;
}

function verifyNonReflexiveDerivedEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let nonReflexiveDerivedEqualityTermsVerified = false;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (!leftTermNodeMatchesRightTermNode) {
    let verifiedAhead;

    const leftTermString = context.nodeAsString(leftTermNode),
          rightTermString = context.nodeAsString(rightTermNode);

    context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' non-reflexive derived equality terms...`, leftTermNode);

    debugger

    verifiedAhead = verifyAhead();

    nonReflexiveDerivedEqualityTermsVerified = verifiedAhead; ///

    if (nonReflexiveDerivedEqualityTermsVerified) {
      context.debug(`...verified the '${leftTermString}' and '${rightTermString}' non-reflexive derived equality terms.`, leftTermNode);
    }
  }

  return nonReflexiveDerivedEqualityTermsVerified;
}

function verifyStandaloneEquality(equalityNode, derived, context, verifyAhead) {
  let standaloneEqualityVerified = false;

  if (!derived) {
    const equalityString = context.nodeAsString(equalityNode);

    context.trace(`Verifying the '${equalityString}' standalone equality...`, equalityNode);

    const types = [],
          leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          termsVerified = verifyTerms(leftTermNode, rightTermNode, types, context, () => {
            let verifiedAhead;

            const secondType = second(types),
                  firstType = first(types),
                  rightType = secondType, ///
                  leftType = firstType, ///
                  standaloneEqualityTermsVerified = verifyStandaloneEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead);

            verifiedAhead = standaloneEqualityTermsVerified;  ///

            return verifiedAhead;
          });

    standaloneEqualityVerified = termsVerified; ///

    if (standaloneEqualityVerified) {
      context.trace(`...verified the '${equalityString}' standalone equality.`, equalityNode);
    }
  }

  return standaloneEqualityVerified;
}

function verifyStandaloneEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let standaloneEqualityTermsVerified;

  const leftTermString = context.nodeAsString(leftTermNode),
        rightTermString = context.nodeAsString(rightTermNode);

  context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' standalone equality terms...`, leftTermNode);

  const verifyStandaloneEqualityTermsFunctions = [
    verifyReflexiveStandaloneEqualityTerms,
    verifyNonReflexiveStandaloneEqualityTerms
  ];

  standaloneEqualityTermsVerified = verifyStandaloneEqualityTermsFunctions.some((verifyStandaloneEqualityTermsFunction) => {
    standaloneEqualityTermsVerified = verifyStandaloneEqualityTermsFunction(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead);

    if (standaloneEqualityTermsVerified) {
      return true;
    }
  });

  if (standaloneEqualityTermsVerified) {
    context.debug(`...verified the '${leftTermString}' and '${rightTermString}' standalone equality terms.`, leftTermNode);
  }

  return standaloneEqualityTermsVerified;
}

function verifyReflexiveStandaloneEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let reflexiveStandaloneEqualityTermsVerified = false;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (leftTermNodeMatchesRightTermNode) {
    let verifiedAhead;

    const leftTermString = context.nodeAsString(leftTermNode),
          rightTermString = context.nodeAsString(rightTermNode);

    context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' reflexive standalone equality terms...`, leftTermNode);

    verifiedAhead = verifyAhead();

    reflexiveStandaloneEqualityTermsVerified = verifiedAhead; ///

    if (reflexiveStandaloneEqualityTermsVerified) {
      context.debug(`...verified the '${leftTermString}' and '${rightTermString}' reflexive standalone equality terms.`, leftTermNode);
    }
  }

  return reflexiveStandaloneEqualityTermsVerified;
}

function verifyNonReflexiveStandaloneEqualityTerms(leftTermNode, rightTermNode, leftType, rightType, context, verifyAhead) {
  let nonReflexiveStandaloneEqualityTermsVerified = false;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (!leftTermNodeMatchesRightTermNode) {
    let verifiedAhead;

    const leftTermString = context.nodeAsString(leftTermNode),
          rightTermString = context.nodeAsString(rightTermNode);

    context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' non-reflexive standalone equality terms...`, leftTermNode);

    debugger

    verifiedAhead = verifyAhead();

    nonReflexiveStandaloneEqualityTermsVerified = verifiedAhead; ///

    if (nonReflexiveStandaloneEqualityTermsVerified) {
      context.debug(`...verified the '${leftTermString}' and '${rightTermString}' non-reflexive standalone equality terms.`, leftTermNode);
    }
  }

  return nonReflexiveStandaloneEqualityTermsVerified;
}