"use strict";

import { areTermNodesEqual } from "../utilities/equivalences";

export default function verifyTermAgainstTerm(termNodeA, termNodeB, localContext, verifyAhead) {
  let termVerifiedAgainstTerm = false;

  const leftTermNode = termNodeA, ///
        rightTermNode = termNodeB, ///
        equivalences = localContext.getEquivalences(),
        termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

  if (termNodesEqual) {
    const verifiedAhead = verifyAhead();

    termVerifiedAgainstTerm = verifiedAhead;  ///
  }

  return termVerifiedAgainstTerm;
}