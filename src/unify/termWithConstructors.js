"use strict";

import unifyTermWithConstructor from "../unify/termWithConstructor";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function unifyTermWithConstructors(termNode, terms, localContext, verifyAhead) {
  let termUnifiedWithConstructors = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode === null) {
    const constructors = localContext.getConstructors();

    termUnifiedWithConstructors = constructors.some((constructor) => {
      const termUnifiedWithConstructor = unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead);

      if (termUnifiedWithConstructor) {
        return true;
      }
    });
  }

  return termUnifiedWithConstructors;
}
