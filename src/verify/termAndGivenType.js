"use strict";

import verifyTerm from "../verify/term";
import verifyGivenType from "../verify/givenType";

export default function verifyTermAndGivenType(termNode, typeNode, terms, types, localContext, verifyAhead) {
  let termAndGivenTypeVerified;

  const termString = localContext.nodeAsString(termNode),
        typeString = localContext.nodeAsString(typeNode);

  localContext.trace(`Verifying the '${termString}' term and the given '${typeString}' type...`, termNode);

  const termVerified = verifyTerm(termNode, terms, localContext, () => {
          let verifiedAhead;

          const givenTypeVerified = verifyGivenType(typeNode, types, localContext, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = givenTypeVerified;  ///

          return verifiedAhead;
        });

  termAndGivenTypeVerified = termVerified; ///

  if (termAndGivenTypeVerified) {
    localContext.debug(`...verified the '${termString}' term and the given '${typeString}' type.`, termNode);
  }

  return termAndGivenTypeVerified
}
