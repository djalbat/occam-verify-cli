"use strict";

import NodesVerifier from "../../verifier/nodes";

import { METAVARIABLE_RULE_NAME } from "../../ruleNames";
import { metavariableNameFromMetavariableNode } from "../../utilities/query";

class MetastatementNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext) {
    let nonTerminalNodeVerified;

    const nonTerminalNode = nonTerminalNodeA, ///
          ruleName = nonTerminalNode.getRuleName(); ///

    switch (ruleName) {
      case METAVARIABLE_RULE_NAME: {
        const metavariableNode = nonTerminalNode, ///
              metavariableVerified = verifyMetavariable(metavariableNode, metaproofContext),
              metavariableNodeVerified = metavariableVerified;  ///

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const metastatementNodesVerifier = new MetastatementNodesVerifier();

export default metastatementNodesVerifier;

function verifyMetavariable(metavariableNode, metaproofContext) {
  let metavariableVerified;

  const metavariableString = metaproofContext.nodeAsString(metavariableNode);

  metaproofContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);

  metavariableVerified = metavariablePresent;

  if (metavariableVerified) {
    metaproofContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
