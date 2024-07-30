"use strict";

import NodeVerifier from "../../verifier/node";

import { VARIABLE_RULE_NAME, METAVARIABLE_RULE_NAME } from "../../ruleNames";

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

      case VARIABLE_RULE_NAME: {
        const variableNode = nonTerminalNode, ///
              variableVerified = verifyVariable(variableNode, localMetaContext, verifyAhead),
              variableNodeVerified = variableVerified;  ///

        nonTerminalNodeVerified = variableNodeVerified; ///

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

function verifyVariable(variableNode, localMetaContext, verifyAhead) {
  let variableVerified;

  const variableString = localMetaContext.nodeAsString(variableNode);

  localMetaContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = localMetaContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    const verifiedAhead = verifyAhead();

    variableVerified = verifiedAhead; ///
  }

  if (variableVerified) {
    localMetaContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
