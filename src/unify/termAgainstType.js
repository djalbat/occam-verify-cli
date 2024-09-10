"use strict";

import shim from "../shim";

import { first } from "../utilities/array";

export default function unifyTermAgainstType(termNode, typeNode, localContext) {
  let termUnifiedAgainstType;

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

  termUnifiedAgainstType = termVerified; ///

  return termUnifiedAgainstType;
}
