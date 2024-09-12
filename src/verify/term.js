"use strict";

import shim from "../shim";
import Term from "../term";
import unifyTermWithConstructors from "../unify/termWithConstructors";
import unifyTermWithBracketedConstructor from "../unify/termWithBracketedConstructor";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, terms, localContext, verifyAhead) {
  let termVerified;

  const termString = localContext.nodeAsString(termNode);

  localContext.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsVariable,
    unifyTermWithConstructors,
    unifyTermWithBracketedConstructor
  ];

  termVerified = verifyTermFunctions.some((verifyTermFunction) => {
    const termVerified = verifyTermFunction(termNode, terms, localContext, verifyAhead);

    if (termVerified) {
      return true;
    }
  });

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

    const variable = localContext.findVariableByVariableNode(variableNode);

    if (variable === null) {
      const variableString = localContext.nodeAsString(variableNode);

      localContext.trace(`The '${variableString}' variable is not present.`, termNode);
    } else {
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
