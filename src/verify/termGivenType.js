"use strict";

import shim from "../shim";

import { first } from "../utilities/array";

export default function verifyTermGivenType(termNode, type, localContext) {
  let termVerifiedGivenType = false;

  if (type !== null) {
    const { verifyTerm } = shim,
          terms = [],
          termVerified = verifyTerm(termNode, terms, localContext, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  term = firstTerm, ///
                  termType = term.getType(),
                  termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

            if (termTypeEqualToOrSubTypeOfType) {
              verifiedAhead = true;
            }

            return verifiedAhead;
          });

    termVerifiedGivenType = termVerified; ///
  }

  return termVerifiedGivenType;
}
