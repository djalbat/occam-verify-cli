"use strict";

import verifyTerm from "../../verify/term";
import NodeVerifier from "../../verifier/node";

import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
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

  const types = [],
        context = fileContext,  ///
        termVerified = verifyTerm(termNode, types, context, verifyAhead);

  standaloneTermVerified = termVerified;  ///

  if (standaloneTermVerified) {
    fileContext.debug(`...verified the '${termString}' standalone term.`, termNode);
  }

  return standaloneTermVerified;
}

export function verifyType(typeNode, fileContext, verifyAhead) {
  let typeVerified = false;

  const typeString = fileContext.nodeAsString(typeNode);

  fileContext.trace(`Verifying the '${typeString}' type...`, typeNode);

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    fileContext.debug(`The type '${typeName}' is not present.`, typeNode);
  } else {
    fileContext.debug(`...verified the '${typeString}' type.`, typeNode);

    const verifiedAhead = verifyAhead();

    typeVerified = verifiedAhead; ///
  }

  return typeVerified;
}

function verifyArgument(argumentNode, fileContext, verifyAhead) {
  let argumentVerified;

  const argumentString = fileContext.nodeAsString(argumentNode);

  fileContext.trace(`Verifying the '${argumentString}' argument...`, argumentNode);

  const typeNode = typeNodeQuery(argumentNode),
        termNode = termNodeQuery(argumentNode);

  if (typeNode !== null) {
    const typeVerified = verifyType(typeNode, fileContext, verifyAhead);

    argumentVerified = typeVerified; ///
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
