"use strict";

import metastatementNodeVerifier from "../verifier/node/metastatement";

function verifyMetastatement(metastatementNode, derived, localMetaContext) {
  let metastatementVerified;

  const metastatementString = localMetaContext.nodeAsString(metastatementNode);

  localMetaContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetastatementFunctions = [
    verifyStandaloneMetastatement
  ];

  metastatementVerified = verifyMetastatementFunctions.some((verifyMetastatementFunction) => {
    const metastatementVerified = verifyMetastatementFunction(metastatementNode, derived, localMetaContext);

    if (metastatementVerified) {
      return true;
    }
  });

  if (metastatementVerified) {
    localMetaContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

Object.assign(verifyMetastatement, {
  metastatementNodeVerifier
});

export default verifyMetastatement;

function verifyStandaloneMetastatement(metastatementNode, derived, localMetaContext) {
  let standaloneMetastatementVerified;

  const metastatementString = localMetaContext.nodeAsString(metastatementNode);

  localMetaContext.trace(`Verifying the '${metastatementString}' standalone metastatement...`, metastatementNode);

  const nonTerminalNode = metastatementNode, ///
        nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localMetaContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  standaloneMetastatementVerified = nonTerminalNodeVerified;  ///

  if (standaloneMetastatementVerified) {
    localMetaContext.debug(`...verified the '${metastatementString}' standalone metastatement.`, metastatementNode);
  }

  return standaloneMetastatementVerified;

}