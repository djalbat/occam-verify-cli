"use strict";

import verifyTerm from "../verify/term";

import { first, second } from "../utilities/array";

export default function verifyTerms(termNodes, terms, context, verifyAhead) {
  let termsVerified;

  const firstTermNode = first(termNodes),
        secondTermNode = second(termNodes),
        firstTermString = context.nodeAsString(firstTermNode),
        secondTermString = context.nodeAsString(secondTermNode);

  context.trace(`Verifying the '${firstTermString}' and '${secondTermString}' terms...`, firstTermNode);

  const firstTermVerified = verifyTerm(firstTermNode, terms, context, () => {
          let verifiedAhead;

          const secondTermVerified = verifyTerm(secondTermNode, terms, context, () => {
            let verifiedAhead;

            verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = secondTermVerified;  ///

          return verifiedAhead;
        });

  termsVerified = firstTermVerified; ///

  if (termsVerified) {
    context.debug(`...verified the '${firstTermString}' and '${secondTermString}' terms.`, firstTermNode);
  }

  return termsVerified
}
