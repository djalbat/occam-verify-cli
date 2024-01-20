"use strict";

import verifyTerm from "../../verify/term";
import NodeVerifier from "../../verifier/node";
import verifyGivenType from "../../verify/givenType";

import { nodeQuery } from "../../utilities/query";
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

export function verifyStandaloneTerm(termNode, fileContext, verifyAhead) {
  let standaloneTermVerified;

  const termString = fileContext.nodeAsString(termNode);

  fileContext.trace(`Verifying the '${termString}' standalone term...`, termNode);

  const terms = [],
        context = fileContext,  ///
        termVerified = verifyTerm(termNode, terms, context, verifyAhead);

  standaloneTermVerified = termVerified;  ///

  if (standaloneTermVerified) {
    fileContext.debug(`...verified the '${termString}' standalone term.`, termNode);
  }

  return standaloneTermVerified;
}

function verifyArgument(argumentNode, fileContext, verifyAhead) {
  let argumentVerified;

  const argumentString = fileContext.nodeAsString(argumentNode);

  fileContext.trace(`Verifying the '${argumentString}' argument...`, argumentNode);

  const typeNode = typeNodeQuery(argumentNode),
        termNode = termNodeQuery(argumentNode);

  if (typeNode !== null) {
    const types = [], ///
          givenTypeVerified = verifyGivenType(typeNode, types, fileContext, verifyAhead);

    argumentVerified = givenTypeVerified; ///
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
