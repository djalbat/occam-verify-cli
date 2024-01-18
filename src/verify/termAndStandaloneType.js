"use strict";

import verifyTerm from "../verify/term";
import verifyStandaloneType from "../verify/standaloneType";

export default function verifyTermAndStandaloneType(termNode, typeNode, terms, types, context, verifyAhead) {
  let termAndStandaloneTypeVerified;

  const termString = context.nodeAsString(termNode),
        typeString = context.nodeAsString(typeNode);

  context.trace(`Verifying the '${termString}' term and the standalone '${typeString}' type...`, termNode);

  const termVerified = verifyTerm(termNode, terms, context, () => {
          let verifiedAhead;

          const standaloneTypeVerified = verifyStandaloneType(typeNode, types, context, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = standaloneTypeVerified;  ///

          return verifiedAhead;
        });

  termAndStandaloneTypeVerified = termVerified; ///

  if (termAndStandaloneTypeVerified) {
    context.debug(`...verified the '${termString}' term and the standalone '${typeString}' type.`, termNode);
  }

  return termAndStandaloneTypeVerified
}
