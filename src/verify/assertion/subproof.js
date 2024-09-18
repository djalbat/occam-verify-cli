"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

const verifySubproofAssertionFunctions = [
  verifyDerivedSubproofAssertion,
  verifyStatedSubproofAssertion
];

export default function verifySubproofAssertion(subproofAssertionNode, assignments, stated, localContext) {
  let subproofAssertionVerified = false;

  const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

  localContext.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`, subproofAssertionNode);

  const verified = metaLevelVerifier.verify(subproofAssertionNode, assignments, stated, localContext);

  if (verified) {
    subproofAssertionVerified = verifySubproofAssertionFunctions.some((verifySubproofAssertionFunction) => {
      const subproofAssertionVerified = verifySubproofAssertionFunction(subproofAssertionNode, assignments, stated, localContext);

      if (subproofAssertionVerified) {
        return true;
      }
    });
  }

  if (subproofAssertionVerified) {
    localContext.debug(`...verified the '${subproofAssertionString}' subproof assertion.`, subproofAssertionNode);
  }

  return subproofAssertionVerified;
}

function verifyDerivedSubproofAssertion(subproofAssertionNode, assignments, stated, localContext) {
  let derivedSubproofAssertionVerified;

  if (!stated) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    localContext.trace(`Verifying the '${subproofAssertionString}' derived subproof assertion...`, subproofAssertionNode);

    derivedSubproofAssertionVerified = false;

    localContext.debug(`The '${subproofAssertionString}' derived subproof assertion cannot be verified.`, subproofAssertionNode);
  }

  return derivedSubproofAssertionVerified;
}

function verifyStatedSubproofAssertion(subproofAssertionNode, assignments, stated, localContext) {
  let statedSubproofAssertionVerified;

  if (stated) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    localContext.trace(`Verifying the '${subproofAssertionString}' stated subproof assertion...`, subproofAssertionNode);

    statedSubproofAssertionVerified = true;

    if (statedSubproofAssertionVerified) {
      localContext.debug(`...verified the '${subproofAssertionString}' stated subproof assertion.`, subproofAssertionNode);
    }
  }

  return statedSubproofAssertionVerified;
}
