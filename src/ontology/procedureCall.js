"use strict";

import { Expressions } from "occam-furtle";

import ontology from "../ontology";

import { define } from "../ontology";
import { parametersFromJSON, procedureReferenceFromJSON, parametersToParametersJSON, procedureReferenceToProcedureReferenceJSON } from "../utilities/json";

export default define(class ProcedureCall {
  constructor(node, string, procedureReference, parameters) {
    this.node = node;
    this.string = string;
    this.procedureReference = procedureReference;
    this.parameters = parameters;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getProcedureReference() {
    return this.procedureReference;
  }

  getParameters() {
    return this.parameters;
  }

  getName() { return this.procedureReference.getName(); }

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

    const name = this.getName(),
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

    const name = this.getName(),
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
          procedureReference = procedureReferenceToProcedureReferenceJSON(this.procedureReference),
          parameters = parametersJSON,  ///
          json = {
            procedureReference,
            parameters
          };

    return json;
  }

  static name = "ProcedureCall";

  static fromJSON(json, context) {
    const procedureReference = procedureReferenceFromJSON(json, context),
          parameters = parametersFromJSON(json, context),
          node = null,
          string = stringFromProcedureReferenceAndParameters(procedureReference, parameters),
          procedureCall = new ProcedureCall(node, string, procedureReference, parameters);

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
  const { ProcedureCall, ProcedureReference } = ontology,
        node = procedureCallNode, ///
        procedureReference = ProcedureReference.fromProcedureCallNode(procedureCallNode, context),
        parameters = parametersFromProcedureCallNode(procedureCallNode, context),
        string = stringFromProcedureReferenceAndParameters(procedureReference, parameters),
        procedureCall = new ProcedureCall(node, string, procedureReference, parameters);

  return procedureCall;
}

function parametersFromProcedureCallNode(procedureCallNode, context) {
  const { Parameter } = ontology,
        parameterNodes = procedureCallNode.getParameterNodes(),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}

function stringFromProcedureReferenceAndParameters(procedureReference, parameters) {
  const name = procedureReference.getName(),
        parametersString = parameters.reduce((parametersString, parameter) => {
          const parameterString = parameter.getString();

          parametersString = (parametersString === null) ?
                                parameterString : ///
                                  `${parametersString}, ${parameterString}`;

          return parametersString;
        }, null),
        string = `${name}(${parametersString})`;

  return string;
}
