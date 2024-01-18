"use strict";

import NodeVerifier from "../../verifier/node";

import { METAVARIABLE_RULE_NAME } from "../../ruleNames";

class MetastatementNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName(); ///

    switch (ruleName) {
      case METAVARIABLE_RULE_NAME: {
        const metavariableNode = nonTerminalNode, ///
              metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext, verifyAhead),
              metavariableNodeVerified = metavariableVerified;  ///

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const metastatementNodeVerifier = new MetastatementNodeVerifier();

export default metastatementNodeVerifier;

function verifyMetavariable(metavariableNode, localMetaContext, verifyAhead) {
  let metavariableVerified;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariablePresent = localMetaContext.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (metavariablePresent) {
    const verifiedAhead = verifyAhead();

    metavariableVerified = verifiedAhead; ///
  }

  if (metavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
