"use strict";

import { areTermNodesEqual } from "../utilities/equivalences";

export default function unifyTermAgainstTerm(leftTermNode, rightTermNode, localContext, unifyAhead) {
  let termUnifiedAgainstTerm = false;

  const equivalences = localContext.getEquivalences(),
        termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

  if (termNodesEqual) {
    const unifiedAhead = unifyAhead();

    termUnifiedAgainstTerm = unifiedAhead;  ///
  }

  return termUnifiedAgainstTerm;
}