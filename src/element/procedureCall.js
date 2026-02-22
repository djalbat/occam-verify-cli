"use strict";

import { Element } from "occam-languages";
import { termsUtilities } from "occam-furtle";

import { define } from "../elements";
import { parametersFromJSON, procedureReferenceFromJSON, parametersToParametersJSON, procedureReferenceToProcedureReferenceJSON } from "../utilities/json";

const { termsFromPrimitives } = termsUtilities;

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

  getProcedureCallNode() {
    const node = this.getNode(),
          procedureCallNode = node;

    return procedureCallNode;
  }

  getProcedureName() { return this.procedureReference.getProcedureName(); }

  findPrimitives(context) {
    const substitutions = context.getSubstitutions(),
          primitives = this.parameters.map((parameter) => {
            const primitive = parameter.findPrimitive(substitutions);

            return primitive;
          });

    return primitives;
  }

  validate(context) {
    let validates = false;

    const procedureCallString = this.getString(); ///

    context.trace(`Validating the '${procedureCallString}' procedure call...`);

    const procedureName = this.getProcedureName(),
          procedure = context.findProcedureByProcedureName(procedureName);

    if (procedure !== null) {
      const procedureBoolean = procedure.isBoolean();

      if (procedureBoolean) {
        validates = true;
      } else {
        context.debug(`The '${procedureCallString}' procedure is not boolean.`);
      }
    } else {
      context.debug(`The '${procedureCallString}' procedure is not present.`);
    }

    if (validates) {
      context.debug(`...validated the '${procedureCallString}' procedure call.`);
    }

    return validates;
  }

  async unifyIndependently(context) {
    let unifiesIndependently = false;

    const procedureCallString = this.getString(); ///

    context.trace(`Unifying the '${procedureCallString}' procedure call independently...`);

    const procedureName = this.getProcedureName(),
          procedure = context.findProcedureByProcedureName(procedureName);

    // try {
      const primitives = this.findPrimitives(context),
            terms = termsFromPrimitives(primitives),
            term = await procedure.call(terms, context),
            boolean = term.isBoolean();

      if (!boolean) {
        context.info(`The '${procedureCallString}' procedure call did not return a boolean.`);
      } else {
        const primitiveValue = term.getPrimitiveValue();

        if (primitiveValue) {
          unifiesIndependently = true;
        }
      }
    // } catch (exception) {
    //   const message = exception.getMessage();
    //
    //   context.info(message);
    // }

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
