"use strict";

import { Values } from "occam-furtle";

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

  findNodes(substitutions) {
    const nodes = this.parameters.map((parameter) => {
      const replacementNode = parameter.findReplacementNode(substitutions),
            node = replacementNode;  ///

      return node;
    });

    return nodes;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const procedureCallString = this.string; ///

    context.trace(`Verifying the '${procedureCallString}' procedure call...`);

    const procedurePresent = context.isProcedurePresentByReference(this.reference);

    if (procedurePresent) {
      verified = true;
    } else {
      context.trace(`The '${procedureCallString}' procedure is not present.`);
    }

    if (verified) {
      context.debug(`...verified the '${procedureCallString}' procedure call.`);
    }

    return verified;
  }

  unifyIndependently(substitutions, context) {
    let unifiedIndependently = false;

    const procedureCallString = this.string; ///

    context.trace(`Unifying the '${procedureCallString}' procedure call independently...`);

    const procedure = context.findProcedureByReference(this.reference),
          nodes = this.findNodes(substitutions),
          values = Values.fromNodes(nodes, context);

    // try {
      const value = procedure.call(values, context),
            boolean = value.getBoolean();

      unifiedIndependently = boolean; ///
    // } catch (exception) {
    //   const message = exception.getMessage();
    //
    //   context.info(message);
    // }

    if (unifiedIndependently) {
      context.debug(`...unified the '${procedureCallString}' procedure call independently.`);
    }

    return unifiedIndependently;
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
