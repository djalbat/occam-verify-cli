"use strict";

import { Expressions } from "occam-furtle";

import Element from "../element";

import { define } from "../elements";
import { parametersFromJSON, procedureReferenceFromJSON, parametersToParametersJSON, procedureReferenceToProcedureReferenceJSON } from "../utilities/json";

export default define(class ProcedureCall extends Element {
  constructor(context, string, node, parameters, procedureReference) {
    super(context, string, node);

    this.parameters = parameters;
    this.procedureReference = procedureReference;
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

    const procedureCallString = this.getString(); ///

    context.trace(`Verifying the '${procedureCallString}' procedure call...`);

    const name = this.getName(),
          procedure = context.findProcedureByName(name);

    if (procedure !== null) {
      const procedureBoolean = procedure.isBoolean();

      if (procedureBoolean) {
        verifies = true;
      } else {
        context.trace(`The '${procedureCallString}' procedure is not boolean.`);
      }
    } else {
      context.trace(`The '${procedureCallString}' procedure is not present.`);
    }

    if (verifies) {
      context.debug(`...verified the '${procedureCallString}' procedure call.`);
    }

    return verifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const procedureCallString = this.getString(); ///

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
          procedureCall = new ProcedureCall(context, string, node, parameters, procedureReference);

    return procedureCall;
  }
});
