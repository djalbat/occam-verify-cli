"use strict";

import { Expressions } from "occam-furtle";

import { define } from "../elements";
import { parametersFromJSON, procedureReferenceFromJSON, parametersToParametersJSON, procedureReferenceToProcedureReferenceJSON } from "../utilities/json";

export default define(class ProcedureCall {
  constructor(contexct, string, node, parameters, procedureReference) {
    this.contexct = contexct;
    this.string = string;
    this.node = node;
    this.parameters = parameters;
    this.procedureReference = procedureReference;
  }

  getContext() {
    return this.contexct;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getParameters() {
    return this.parameters;
  }

  getProcedureReference() {
    return this.procedureReference;
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
    const node = null,
          parameters = parametersFromJSON(json, context),
          procedureReference = procedureReferenceFromJSON(json, context),
          string = stringFromProcedureReferenceAndParameters(procedureReference, parameters),
          procedureCall = new ProcedureCall(string, node, parameters, procedureReference);

    return procedureCall;
  }
});
