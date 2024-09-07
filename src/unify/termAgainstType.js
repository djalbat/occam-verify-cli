"use strict";

import shim from "../shim";

import { first } from "../utilities/array";

export default function unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead) {
  let termUnifiedAgainstType;

  const { verifyTerm } = shim,
        terms = [],
        termVerified = verifyTerm(termNodeA, terms, localContext, () => {
          let unifiedAhead = false;

          const firstTerm = first(terms),
                term = firstTerm, ///
                termType = term.getType(),
                typeNode = typeNodeB, ///
                type = localContext.findTypeByTypeNode(typeNode),
                termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

          if (termTypeEqualToOrSubTypeOfType) {
            unifiedAhead = unifyAhead();
          }

          return unifiedAhead;
        });

  termUnifiedAgainstType = termVerified; ///

  return termUnifiedAgainstType;
}
