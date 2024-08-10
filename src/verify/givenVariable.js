"use strict";

export default function verifyGivenVariable(variableNode, variables, localContext, verifyAhead) {
  let givenVariableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' given variable...`, variableNode);

  const variable = localContext.findVariableByVariableNode(variableNode);

  if (variable !== null) {
    let verifiedAhead;

    variables.push(variable);

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      variables.pop();
    }

    givenVariableVerified = verifiedAhead; ///
  }

  if (givenVariableVerified) {
    localContext.debug(`...verified the '${variableString}' given variable.`, variableNode);
  }

  return givenVariableVerified;
}
