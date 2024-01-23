"use strict";

import metastatementNodeVerifier from "../verifier/node/metastatement";

function verifyMetastatement(metastatementNode, derived, localMetaContext) {
  let metastatementVerified;

  const metastatementString = localMetaContext.nodeAsString(metastatementNode);

  localMetaContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const nonTerminalNode = metastatementNode, ///
        nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localMetaContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  metastatementVerified = nonTerminalNodeVerified;  ///

  if (metastatementVerified) {
    localMetaContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

Object.assign(metastatementNodeVerifier, {
  verifyMetastatement
});

export default verifyMetastatement;
