"use strict";

import { findEquivalenceByTermNodes } from "../utilities/equivalences";

export default function unifyTermWithTerm(leftTermNode, rightTermNode, localContext) {
  let termUnifiedWithTerm;

  const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

  if (leftTermNodeMatchesRightTermNode) {
    termUnifiedWithTerm = true;
  } else {
    const equivalences = localContext.getEquivalences(),
          termNodes = [
            leftTermNode,
            rightTermNode
          ],
          equivalence = findEquivalenceByTermNodes(equivalences, termNodes);

    termUnifiedWithTerm = (equivalence !== null);
  }

  return termUnifiedWithTerm;
}
