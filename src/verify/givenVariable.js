"use strict";

export default function verifyGivenVariable(variableNode, variables, context, verifyAhead) {
  let givenVariableVerified = false;

  const variableString = context.nodeAsString(variableNode);

  context.trace(`Verifying the '${variableString}' given variable...`, variableNode);

  const variable = context.findVariableByVariableNode(variableNode);

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
    context.debug(`...verified the '${variableString}' given variable.`, variableNode);
  }

  return givenVariableVerified;
}
