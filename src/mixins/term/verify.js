"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTermAsVariable(term, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const { Variable } = dom,
        context = localContext, ///
        termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode),
        variable = Variable.fromVariableNode(variableNode, context);

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
