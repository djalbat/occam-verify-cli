"use strict";

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
        const context = localMetaContext, ///
              metavariableNode = nonTerminalNode, ///
              standaloneMetavariableVerified = verifyStandaloneMetavariable(metavariableNode, context, verifyAhead),
              metavariableNodeVerified = standaloneMetavariableVerified;  ///

        nonTerminalNodeVerified = metavariableNodeVerified; ///

        break;
      }

      case VARIABLE_RULE_NAME: {
        const context = localMetaContext, ///
              variableNode = nonTerminalNode, ///
              standaloneVariableVerified = verifyStandaloneVariable(variableNode, context, verifyAhead),
              variableNodeVerified = standaloneVariableVerified;  ///

        nonTerminalNodeVerified = variableNodeVerified; ///

        break;
      }

      case TERM_RULE_NAME: {
        const context = localMetaContext, ///
              termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, context, verifyAhead),
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
