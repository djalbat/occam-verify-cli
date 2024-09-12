"use strict";

import shim from "../shim";
import Term from "../term";
import unifyTermWithConstructors from "../unify/termWithConstructors";
import unifyTermWithBracketedConstructor from "../unify/termWithBracketedConstructor";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

const unifyTermFunctions = [
        unifyTermWithBracketedConstructor,
        unifyTermWithConstructors,
      ],
      verifyTermFunctions = [
        verifyTermAsVariable
      ];

function verifyTerm(termNode, terms, localContext, verifyAhead) {
  let termVerified = false;

  const termString = localContext.nodeAsString(termNode);

  localContext.trace(`Verifying the '${termString}' term...`, termNode);

  if (!termVerified) {
    const termUnified = unifyTermFunctions.some((unifyTermFunction) => {
      const termUnified = unifyTermFunction(termNode, terms, localContext, verifyAhead);

      if (termUnified) {
        return true;
      }
    });

    termVerified = termUnified; ///
  }

  if (!termVerified) {
    termVerified = verifyTermFunctions.some((verifyTermFunction) => {
      const termVerified = verifyTermFunction(termNode, terms, localContext, verifyAhead);

      if (termVerified) {
        return true;
      }
    });
  }

  if (termVerified) {
    localContext.debug(`...verified the '${termString}' term.`, termNode);
  }

  return termVerified;
}

Object.assign(shim, {
  verifyTerm
});

export default verifyTerm;

function verifyTermAsVariable(termNode, terms, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = localContext.nodeAsString(termNode);

    localContext.trace(`Verifying the '${termString}' term as a variable...`, termNode);

    const variableVerified = verifyVariable(variableNode, localContext);

    if (variableVerified) {
      let verifiedAhead;

      const type = variable.getType(),
            term = Term.fromTermNodeAndType(termNode, type);

      terms.push(term);

      verifiedAhead = verifyAhead();

      terms.pop();

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}

function verifyVariable(variableNode, localContext) {
  let variableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = localContext.isVariablePresentByVariableNode(variableNode);

  if (!variablePresent) {
    localContext.trace(`The '${variableString}' variable is not present.`, variableNode);
  } else {
    variableVerified = true;
  }

  if (variableVerified) {
    localContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
