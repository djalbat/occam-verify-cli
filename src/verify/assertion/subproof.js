"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

export default function verifySubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let subproofAssertionVerified;

  const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

  localContext.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`, subproofAssertionNode);

  const verifySubproofAssertionFunctions = [
    verifyDerivedSubproofAssertion,
    verifyStatedSubproofAssertion
  ];

  subproofAssertionVerified = verifySubproofAssertionFunctions.some((verifySubproofAssertionFunction) => {
    const subproofAssertionVerified = verifySubproofAssertionFunction(subproofAssertionNode, assignments, derived, localContext);

    if (subproofAssertionVerified) {
      return true;
    }
  });

  if (subproofAssertionVerified) {
    localContext.debug(`...verified the '${subproofAssertionString}' subproof assertion.`, subproofAssertionNode);
  }

  return subproofAssertionVerified;
}

function verifyDerivedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let derivedSubproofAssertionVerified = false;

  if (derived) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    if (derivedSubproofAssertionVerified) {
      localContext.debug(`The '${subproofAssertionString}' derived subproof assertion cannot be verified.`, subproofAssertionNode);
    }
  }

  return derivedSubproofAssertionVerified;
}

function verifyStatedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let statedSubproofAssertionVerified = false;

  if (!derived) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    localContext.trace(`Verifying the '${subproofAssertionString}' stated subproof assertion...`, subproofAssertionNode);

    debugger

    if (statedSubproofAssertionVerified) {
      localContext.debug(`...verified the '${subproofAssertionString}' stated subproof assertion.`, subproofAssertionNode);
    }
  }

  return statedSubproofAssertionVerified;
}
