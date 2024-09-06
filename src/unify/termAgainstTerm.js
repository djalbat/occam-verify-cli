"use strict";

import { areTermNodesEqual } from "../utilities/equivalences";

export default function unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead) {
  let termUnifiedAgainstTerm = false;

  const leftTermNode = termNodeA, ///
        rightTermNode = termNodeB, ///
        equivalences = localContext.getEquivalences(),
        termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

  if (termNodesEqual) {
    const unifiedAhead = unifyAhead();

    termUnifiedAgainstTerm = unifiedAhead;  ///
  }

  return termUnifiedAgainstTerm;
}