"use strict";

import shim from "../shim";

import { first } from "../utilities/array";

export default function unifyTermAgainstType(termNode, typeNode, localContext, unifyAhead) {
  let termUnifiedAgainstType;

  const { verifyTerm } = shim,
        terms = [],
        termVerified = verifyTerm(termNode, terms, localContext, () => {
          let unifiedAhead = false;

          const firstTerm = first(terms),
                term = firstTerm, ///
                termType = term.getType(),
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
