"use strict";

import Verifier from "../verifier";

import { METAVARIABLE_RULE_NAME } from "../ruleNames";
import { metavariableNameFromMetavariableNode } from "../utilities/query";

class MetastatementVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          ruleName = nonTerminalNode.getRuleName(); ///

    switch (ruleName) {
      case METAVARIABLE_RULE_NAME: {
        const metavariableNode = nonTerminalNode, ///
              metavariableNodeVerified = this.verifyMetavariableNode(metavariableNode, metaproofContext);

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              nodesA = childNodes, ///
              nodesB = childNodes, ///
              nodesVerified = this.verifyNodes(nodesA, nodesB, metaproofContext);

        nonTerminalNodeVerified = nodesVerified; ///

        break;
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetavariableNode(metavariableNode, metaproofContext) {
    let metavariableNodeVerified = false;

    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);

    if (!metavariablePresent) {
      const metavariableString = metaproofContext.nodeAsString(metavariableNode);

      metaproofContext.error(`The '${metavariableString}' metavariable is not present.`, metavariableNode);
    } else {
      metavariableNodeVerified = true;
    }

    return metavariableNodeVerified;
  }
}

const metastatementVerifier = new MetastatementVerifier();

export default function verifyMetastatement(metastatementNode, assignments, derived, metaproofContext) {
  let metastatementVerified = false;

  if (!metastatementVerified) {
    const nonTerminalNodeA = metastatementNode, ///
          nonTerminalNodeB = metastatementNode, ///
          nonTerminalNodeVerified = metastatementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext);

    metastatementVerified = nonTerminalNodeVerified;  ///
  }

  return metastatementVerified;
}
