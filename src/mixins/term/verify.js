"use strict";

import Variable from "../../variable";

import { nodeQuery } from "../../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable");

function verifyTermAsVariable(term, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = localContext.nodeAsString(termNode);

    localContext.trace(`Verifying the '${termString}' term as a variable...`, termNode);

    const variable = Variable.fromVariableNode(variableNode, localContext),
          variableVerified = variable.verify(localContext);

    if (variableVerified) {
      let verifiedAhead;

      const type = variable.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}

const verifyMixins = [
  verifyTermAsVariable
];

export default verifyMixins;

function verifyVariable(variableNode, variables, localContext) {
  let variableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variable = localContext.findVariableByVariableNode(variableNode);

  if (variable === null) {
    localContext.trace(`The '${variableString}' variable is not present.`, variableNode);
  } else {
    variables.push(variable);

    variableVerified = true;
  }

  if (variableVerified) {
    localContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
