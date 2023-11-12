"use strict";

import metastatementNodesVerifier from "../verifier/nodes/metastatement";

export default function verifyMetastatement(metastatementNode, derived, metaproofContext) {
  let metastatementVerified;

  const metastatementString = metaproofContext.nodeAsString(metastatementNode);

  metaproofContext.trace(`Verifying the '${metastatementString}' metastatement...`, metastatementNode);

  const nonTerminalNodeA = metastatementNode, ///
        nonTerminalNodeB = metastatementNode, ///
        nonTerminalNodeVerified = metastatementNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext);

  metastatementVerified = nonTerminalNodeVerified;  ///

  if (metastatementVerified) {
    metaproofContext.debug(`...verified the '${metastatementString}' metastatement.`, metastatementNode);
  }

  return metastatementVerified;
}
