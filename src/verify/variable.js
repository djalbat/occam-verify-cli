"use strict";

export default function verifyVariable(variableNode, localContext, verifyAhead) {
  let variableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = localContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    const verifiedAhead = verifyAhead();

    variableVerified = verifiedAhead; ///
  }

  if (variableVerified) {
    localContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
