"use strict";

import NodeVerifier from "../../verifier/node";

import { METAVARIABLE_RULE_NAME } from "../../ruleNames";
import { metavariableNameFromMetavariableNode } from "../../utilities/query";

class MetastatementNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, metaproofContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName(); ///

    switch (ruleName) {
      case METAVARIABLE_RULE_NAME: {
        const metavariableNode = nonTerminalNode, ///
              metavariableVerified = verifyMetavariable(metavariableNode, metaproofContext, verifyAhead),
              metavariableNodeVerified = metavariableVerified;  ///

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, metaproofContext, verifyAhead);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const metastatementNodeVerifier = new MetastatementNodeVerifier();

export default metastatementNodeVerifier;

function verifyMetavariable(metavariableNode, metaproofContext, verifyAhead) {
  let metavariableVerified;

  const metavariableString = metaproofContext.nodeAsString(metavariableNode);

  metaproofContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);

  if (metavariablePresent) {
    const verifiedAhead = verifyAhead();

    metavariableVerified = verifiedAhead; ///
  }

  if (metavariableVerified) {
    metaproofContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
