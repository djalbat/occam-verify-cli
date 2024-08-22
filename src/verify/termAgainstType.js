"use strict";

import { first } from "../utilities/array";

export default function verifyTermAgainstType(termNode, typeNode, localContext, verifyAhead, verifyTerm) {
  let termVerifiedAgainstType;

  const terms = [],
        termVerified = verifyTerm(termNode, terms, localContext, () => {
          let verifiedAhead = false;

          const firstTerm = first(terms),
                term = firstTerm, ///
                termType = term.getType(),
                type = localContext.findTypeByTypeNode(typeNode),
                termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

          if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = verifyAhead();
          }

          return verifiedAhead;
        });

  termVerifiedAgainstType = termVerified; ///

  return termVerifiedAgainstType;
}
