"use strict";

import { Expressions } from "occam-furtle";

import dom from "../dom";

import { domAssigned } from "../dom";
import { parametersFromJSON, procedureNameFromJSON, parametersToParametersJSON } from "../utilities/json";

export default domAssigned(class ProcedureCall {
  constructor(node, string, procedureName, parameters) {
    this.node = node;
    this.string = string;
    this.procedureName = procedureName;
    this.parameters = parameters;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getProcedureName() {
    return this.procedureName;
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
    let verifies = false;

    const procedureCallString = this.string; ///

    context.trace(`Verifying the '${procedureCallString}' procedure call...`, this.node);

    const name = this.procedureName,  ///
          procedure = context.findProcedureByName(name);

    if (procedure !== null) {
      const procedureBoolean = procedure.isBoolean();

      if (procedureBoolean) {
        verifies = true;
      } else {
        context.trace(`The '${procedureCallString}' procedure is not boolean.`, this.node);
      }
    } else {
      context.trace(`The '${procedureCallString}' procedure is not present.`, this.node);
    }

    if (verifies) {
      context.debug(`...verified the '${procedureCallString}' procedure call.`, this.node);
    }

    return verifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const procedureCallString = this.string; ///

    context.trace(`Unifying the '${procedureCallString}' procedure call independently...`);

    const name = this.procedureName,  ///
          nodes = this.findNodes(substitutions),
          procedure = context.findProcedureByName(name),
          expressions = Expressions.fromNodes(nodes, context);

    try {
      const value = procedure.call(expressions, context),
            boolean = value.getBoolean();

      unifiesIndependently = boolean; ///
    } catch (exception) {
      const message = exception.getMessage();

      context.info(message);
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${procedureCallString}' procedure call independently.`);
    }

    return unifiesIndependently;
  }

  toJSON() {
    const parametersJSON = parametersToParametersJSON(this.parameters),
          procedureName = this.procedureName,
          parameters = parametersJSON,  ///
          json = {
            procedureName,
            parameters
          };

    return json;
  }

  static name = "ProcedureCall";

  static fromJSON(json, context) {
    const procedureName = procedureNameFromJSON(json, context),
          parameters = parametersFromJSON(json, context),
          node = null,
          string = stringFromProcedureNameAndParameters(procedureName, parameters),
          procedureCall = new ProcedureCall(node, string, procedureName, parameters);

    return procedureCall;
  }

  static fromPremiseNode(premiseNode, context) {
    let procedureCall = null;

    const procedureCallNode = premiseNode.getProcedureCallNode();

    if (procedureCallNode !== null) {
      procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }

    return procedureCall;
  }

  static fromSuppositionNode(suppositionNode, context) {
    let procedureCall = null;

    const procedureCallNode = suppositionNode.getProcedureCallNode();

    if (procedureCallNode !== null) {
      procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }

    return procedureCall;
  }
});

function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { ProcedureCall } = dom,
        node = procedureCallNode, ///
        parameters = parametersFromProcedureCallNode(procedureCallNode, context),
        procedureName = procedureCallNode.getProcedureName(),
        string = stringFromProcedureNameAndParameters(procedureName, parameters),
        procedureCall = new ProcedureCall(node, string, procedureName, parameters);

  return procedureCall;
}

function parametersFromProcedureCallNode(procedureCallNode, context) {
  const { Parameter } = dom,
        parameterNodes = procedureCallNode.getParameterNodes(),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}

function stringFromProcedureNameAndParameters(procedureName, parameters) {
  const parametersString = parameters.reduce((parametersString, parameter) => {
          const parameterString = parameter.getString();

          parametersString = (parametersString === null) ?
                                parameterString : ///
                                  `${parametersString}, ${parameterString}`;

          return parametersString;
        }, null),
        string = `${procedureName}(${parametersString})`;

  return string;
}
