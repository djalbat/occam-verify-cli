"use strict";

import verifyStandaloneType from "../verify/standaloneType";

import { verifyTermAsVariable } from "../verify/term";

export default function verifyTermAsVariableAndStandaloneType(termNode, typeNode, variables, types, context, verifyAhead) {
  let termAsVariableAndStandaloneTypeVerified;

  const termString = context.nodeAsString(termNode),
        typeString = context.nodeAsString(typeNode);

  context.trace(`Verifying the '${termString}' term as a variable and the standalone '${typeString}' type...`, termNode);

  const termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, () => {
          let verifiedAhead;

          const standaloneTypeVerified = verifyStandaloneType(typeNode, types, context, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = standaloneTypeVerified;  ///

          return verifiedAhead;
        });

  termAsVariableAndStandaloneTypeVerified = termVerifiedAsVariable; ///

  if (termAsVariableAndStandaloneTypeVerified) {
    context.debug(`...verified the '${termString}' term as a variable and the standalone '${typeString}' type.`, termNode);
  }

  return termAsVariableAndStandaloneTypeVerified
}
