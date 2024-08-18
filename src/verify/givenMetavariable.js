"use strict";

export default function verifyGivenMetavariable(metavariableNode, metavariables, localMetaContext, verifyAhead) {
  let givenMetavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' given metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode);

  if (metavariable !== null) {
    let verifiedAhead;

    metavariables.push(metavariable);

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      metavariables.pop();
    }

    givenMetavariableVerified = verifiedAhead; ///
  }

  if (givenMetavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' given metavariable.`, metavariableNode);
  }

  return givenMetavariableVerified;
}
