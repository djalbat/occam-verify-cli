"use strict";

import metastatementNodeVerifier from "../verifier/node/metastatement";

function verifyMetastatement(metastatementNode, derived, metaproofContext, verifyAhead) {
  let metastatementVerified;

  const metastatementString = metaproofContext.nodeAsString(metastatementNode);

  metaproofContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const verifyMetastatementFunctions = [
    verifyStandaloneMetastatement
  ];

  metastatementVerified = verifyMetastatementFunctions.some((verifyStatementFunction) => {
    const metastatementVerified = verifyStatementFunction(metastatementNode, derived, metaproofContext, verifyAhead);

    if (metastatementVerified) {
      return true;
    }
  });

  if (metastatementVerified) {
    metaproofContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}

Object.assign(verifyMetastatement, {
  metastatementNodeVerifier
});

export default verifyMetastatement;

function verifyStandaloneMetastatement(metastatementNode, derived, metaproofContext, verifyAhead) {
  let standaloneMetastatementVerified;

  const metastatementString = metaproofContext.nodeAsString(metastatementNode);

  metaproofContext.trace(`Verifying the '${metastatementString}' standalone metastatement...`, metastatementNode);

  const nonTerminalNode = metastatementNode, ///
        nonTerminalNodeVerified = metastatementNodeVerifier.verifyNonTerminalNode(nonTerminalNode, metaproofContext);

  standaloneMetastatementVerified = nonTerminalNodeVerified;  ///

  if (standaloneMetastatementVerified) {
    metaproofContext.debug(`...verified the '${metastatementString}' standalone metastatement.`, metastatementNode);
  }

  return standaloneMetastatementVerified;

}