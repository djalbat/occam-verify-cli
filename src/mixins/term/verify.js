"use strict";

import shim from "../../shim";

import { nodeQuery } from "../../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTermAsVariable(term, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const { Variable } = shim,
        termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode),
        variable = Variable.fromVariableNode(variableNode, localContext);

  if (variable !== null) {
    const termString = term.getString();

    localContext.trace(`Verifying the '${termString}' term as a variable...`);

    const variableVerified = variable.verify(localContext);

    if (variableVerified) {
      let verifiedAhead;

      const type = variable.getType();

      term.setType(type);

      verifiedAhead = verifyAhead();

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`);
    }
  }

  return termVerifiedAsVariable;
}

const verifyMixins = [
  verifyTermAsVariable
];

export default verifyMixins;
