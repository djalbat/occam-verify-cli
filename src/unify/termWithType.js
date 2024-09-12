"use strict";

import shim from "../shim";

import { first } from "../utilities/array";

export default function unifyTermWithType(termNode, typeNode, localContext) {
  let termUnifiedWithType;

  const { verifyTerm } = shim,
        terms = [],
        termVerified = verifyTerm(termNode, terms, localContext, () => {
          let verifiedAhead = false;

          const firstTerm = first(terms),
                term = firstTerm, ///
                termType = term.getType(),
                type = localContext.findTypeByTypeNode(typeNode),
                termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

          if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = true;
          }

          return verifiedAhead;
        });

  termUnifiedWithType = termVerified; ///

  return termUnifiedWithType;
}
