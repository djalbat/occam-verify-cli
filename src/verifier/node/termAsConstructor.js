"use strict";

import NodeVerifier from "../../verifier/node";

import { verifyStandaloneType } from "../../verify/type";
import { verifyStandaloneTerm } from "../../verify/term";
import { TERM_RULE_NAME, TYPE_RULE_NAME } from "../../ruleNames";

class TermAsConstructorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, localContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case TYPE_RULE_NAME: {
        const typeNode = nonTerminalNode, ///
              standaloneTypeVerified = verifyStandaloneType(typeNode, localContext, verifyAhead),
              typeNodeVerified = standaloneTypeVerified;  ///

        nonTerminalNodeVerified = typeNodeVerified; ///

        break;
      }

      default: {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, localContext, verifyAhead);

        break;
      }
    }

    return nonTerminalNodeVerified;
  }
}

const termAsConstructorNodeVerifier = new TermAsConstructorNodeVerifier();

export default termAsConstructorNodeVerifier;
