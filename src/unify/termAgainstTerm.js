"use strict";

import { areTermNodesEqual } from "../utilities/equivalences";

export default function unifyTermAgainstTerm(leftTermNode, rightTermNode, localContext) {
  let termUnifiedAgainstTerm = false;

  const equivalences = localContext.getEquivalences(),
        termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

  if (termNodesEqual) {
    termUnifiedAgainstTerm = true;
  }

  return termUnifiedAgainstTerm;
}