"use strict";

import verifyTerm from "../verify/term";
import verifyGivenType from "../verify/givenType";

export default function verifyTermAndGivenType(termNode, typeNode, terms, types, context, verifyAhead) {
  let termAndGivenTypeVerified;

  const termString = context.nodeAsString(termNode),
        typeString = context.nodeAsString(typeNode);

  context.trace(`Verifying the '${termString}' term and the given '${typeString}' type...`, termNode);

  const termVerified = verifyTerm(termNode, terms, context, () => {
          let verifiedAhead;

          const givenTypeVerified = verifyGivenType(typeNode, types, context, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = givenTypeVerified;  ///

          return verifiedAhead;
        });

  termAndGivenTypeVerified = termVerified; ///

  if (termAndGivenTypeVerified) {
    context.debug(`...verified the '${termString}' term and the given '${typeString}' type.`, termNode);
  }

  return termAndGivenTypeVerified
}
