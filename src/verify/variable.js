"use strict";

export default function verifyVariable(variableNode, localContext) {
  let variableVerified = false;

  const variableString = localContext.nodeAsString(variableNode);

  localContext.trace(`Verifying the '${variableString}' variable...`, variableNode);

  const variablePresent = localContext.isVariablePresentByVariableNode(variableNode);

  if (variablePresent) {
    variableVerified = true;
  }

  if (variableVerified) {
    localContext.debug(`...verified the '${variableString}' variable.`, variableNode);
  }

  return variableVerified;
}
