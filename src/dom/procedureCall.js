"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parameterNodesQuery = nodesQuery("/procedureCall/parameters/parameter"),
      procedureCallNodeQuery = nodeQuery("/statement/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(reference, parameters) {
    this.reference = reference;
    this.parameters = parameters;
  }

  getReference() {
    return this.reference;
  }

  getParameters() {
    return this.parameters;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const procedureCallString = this.string; ///

    context.trace(`Verifying the '${procedureCallString}' procedure call...`);

    debugger

    if (verified) {
      context.debug(`...verified the '${procedureCallString}' procedure call.`);
    }

    return verified;
  }

  static name = "ProcedureCall";

  static fromStatementNode(statementNode, context) {
    let procedureCall = null;

    const procedureCallNode = procedureCallNodeQuery(statementNode);

    if (procedureCallNode !== null) {
      const parameters = parametersFromProcedureCallNode(procedureCallNode, context);

      procedureCall = new ProcedureCall(parameters);
    }

    return procedureCall;
  }
});

function parametersFromProcedureCallNode(procedureCallNode, context) {
  const { Parameter } = dom,
        parameterNodes = parameterNodesQuery(procedureCallNode),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}
