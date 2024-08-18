"use strict";

import LocalContext from "../../context/local";
import NodeVerifier from "../../verifier/node";

import { verifyStandaloneTerm } from "../../verify/term";
import { verifyStandaloneVariable } from "../../verify/variable";
import { verifyStandaloneMetavariable } from "../../verify/metavariable";
import { TERM_RULE_NAME, VARIABLE_RULE_NAME, METAVARIABLE_RULE_NAME } from "../../ruleNames";

class MetastatementNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localMetaContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName(); ///

    switch (ruleName) {
      case METAVARIABLE_RULE_NAME: {
        const metavariableNode = nonTerminalNode, ///
              standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, localMetaContext, verifyAhead),
              metavariableNodeVerified = standaloneMetavariableVerified;  ///

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      case VARIABLE_RULE_NAME: {
        const variableNode = nonTerminalNode, ///
              localContext = LocalContext.fromLocalMetaContext(localMetaContext),
              standaloneVariableVerified = verifyStandaloneVariable(variableNode, localContext, verifyAhead),
              variableNodeVerified = standaloneVariableVerified;  ///

        nonTerminalNodeVerified = variableNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              localContext = LocalContext.fromLocalMetaContext(localMetaContext),
              standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

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
