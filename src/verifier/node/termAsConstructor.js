"use strict";

import NodeVerifier from "../../verifier/node";

import { verifyStandaloneType } from "../../verify/type";
import { verifyStandaloneTerm } from "../../verify/term";
import { TERM_RULE_NAME, TYPE_RULE_NAME } from "../../ruleNames";

class TermAsConstructorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case TERM_RULE_NAME: {
        const context = fileContext,  ///
              termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, context, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case TYPE_RULE_NAME: {
        const context = fileContext,  ///
              typeNode = nonTerminalNode, ///
              standaloneTypeVerified = verifyStandaloneType(typeNode, context, verifyAhead),
              typeNodeVerified = standaloneTypeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();

export default termAsConstructorNodeVerifier;
