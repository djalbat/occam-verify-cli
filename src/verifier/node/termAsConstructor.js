"use strict";

import NodeVerifier from "../../verifier/node";

import { nodeQuery } from "../../utilities/query";
import { verifyStandaloneType } from "../../verify/type";
import { verifyStandaloneTerm } from "../../verify/term";
import { TERM_RULE_NAME, ARGUMENT_RULE_NAME } from "../../ruleNames";

const typeNodeQuery = nodeQuery("/argument/type"),
      termNodeQuery = nodeQuery("/argument/term");

class TermAsConstructorNodeVerifier extends NodeVerifier {
  verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const ruleName = nonTerminalNode.getRuleName();

    switch (ruleName) {
      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode, ///
              standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead),
              termNodeVerified = standaloneTermVerified;  ///

        nonTerminalNodeVerified = termNodeVerified; ///

        break;
      }

      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              argumentVerified = verifyArgument(argumentNode, fileContext, verifyAhead),
              argumentNodeVerified = argumentVerified;  ///

        nonTerminalNodeVerified = argumentNodeVerified; ///

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

export function verifyArgument(argumentNode, fileContext, verifyAhead) {
  let argumentVerified;

  const argumentString = fileContext.nodeAsString(argumentNode);

  fileContext.trace(`Verifying the '${argumentString}' argument...`, argumentNode);

  const typeNode = typeNodeQuery(argumentNode),
        termNode = termNodeQuery(argumentNode);

  if (typeNode !== null) {
    const standaloneTypeVerified = verifyStandaloneType(typeNode, fileContext, verifyAhead);

    argumentVerified = standaloneTypeVerified; ///
  }

  if (termNode !== null) {
    const standaloneTermVerified = verifyStandaloneTerm(termNode, fileContext, verifyAhead);

    argumentVerified = standaloneTermVerified;  ///
  }

  if (argumentVerified) {
    fileContext.debug(`...verified the '${argumentString}' argument.`, argumentNode);
  }

  return argumentVerified;
}
