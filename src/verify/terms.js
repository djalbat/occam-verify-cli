"use strict";

import verifyTerm from "../verify/term";

import { first, second } from "../utilities/array";

export default function verifyTerms(termNodes, terms, localContext, verifyAhead) {
  let termsVerified;

  const firstTermNode = first(termNodes),
        secondTermNode = second(termNodes),
        firstTermString = localContext.nodeAsString(firstTermNode),
        secondTermString = localContext.nodeAsString(secondTermNode);

  localContext.trace(`Verifying the '${firstTermString}' and '${secondTermString}' terms...`, firstTermNode);

  const firstTermVerified = verifyTerm(firstTermNode, terms, localContext, () => {
          let verifiedAhead;

          const secondTermVerified = verifyTerm(secondTermNode, terms, localContext, () => {
            const verifiedAhead = verifyAhead();

            return verifiedAhead;
          });

          verifiedAhead = secondTermVerified;  ///

          return verifiedAhead;
        });

  termsVerified = firstTermVerified; ///

  if (termsVerified) {
    localContext.debug(`...verified the '${firstTermString}' and '${secondTermString}' terms.`, firstTermNode);
  }

  return termsVerified
}
