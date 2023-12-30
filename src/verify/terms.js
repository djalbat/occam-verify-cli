"use strict";

import verifyTerm from "../verify/term";

export default function verifyTerms(leftTermNode, rightTermNode, types, context, verifyAhead) {
  let termsVerified;

  const leftTermString = context.nodeAsString(leftTermNode),
        rightTermString = context.nodeAsString(rightTermNode);

  context.trace(`Verifying the '${leftTermString}' and '${rightTermString}' terms...`, leftTermNode);

  const leftTermVerified = verifyTerm(leftTermNode, types, context, () => {
          let verifiedAhead;

          const rightTermVerified = verifyTerm(rightTermNode, types, context, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = rightTermVerified;  ///

          return verifiedAhead;
        });

  if (termsVerified) {
    context.debug(`...verified the '${leftTermString}' and '${rightTermString}' terms.`, leftTermNode);
  }

  termsVerified = leftTermVerified; ///

  return termsVerified
}
