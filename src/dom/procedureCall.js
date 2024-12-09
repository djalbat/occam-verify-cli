"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parameterNodesQuery = nodesQuery("/procedureCall/parameter"),
      procedureCallNodeQuery = nodeQuery("/statement/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(string, reference, parameters) {
    this.string = string;
    this.reference = reference;
    this.parameters = parameters;
  }

  getString() {
    return this.string;
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

    const procedure = context.findProcedure

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
      const { Reference } = dom,
            parameters = parametersFromProcedureCallNode(procedureCallNode, context),
            reference = Reference.fromProcedureCallNode(procedureCallNode, context),
            string = stringFromReferenceAndParameters(reference, parameters);

      procedureCall = new ProcedureCall(string, reference, parameters);
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

function stringFromReferenceAndParameters(reference, parameters) {
  const referenceString = reference.getString(),
        parametersString = parameters.reduce((parametersString, parameter) => {
          const parameterString = parameter.getString();

          parametersString = (parametersString === null) ?
                                parameterString : ///
                                  `${parametersString}, ${parameterString}`;

          return parametersString;
        }, null),
        string = `${referenceString}(${parametersString})`;

  return string;
}
