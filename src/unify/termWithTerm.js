"use strict";

import { areTermNodesEqual } from "../utilities/equivalences";

export default function unifyTermWithTerm(leftTermNode, rightTermNode, localContext) {
  let termUnifiedWithTerm = false;

  const equivalences = localContext.getEquivalences(),
        termNodesEqual = areTermNodesEqual(leftTermNode, rightTermNode, equivalences);

  if (termNodesEqual) {
    termUnifiedWithTerm = true;
  }

  return termUnifiedWithTerm;
}