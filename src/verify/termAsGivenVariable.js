"use strict";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTermAsGivenVariable(termNode, variables, context, verifyAhead) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = context.nodeAsString(termNode);

    context.trace(`Verifying the '${termString}' term as a given variable...`, termNode);

    const variable = context.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      let verifiedAhead;

      variables.push(variable);

      verifiedAhead = verifyAhead();

      if (!verifiedAhead) {
        variables.pop();
      }

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      context.debug(`...verified the '${termString}' term as a given variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}
