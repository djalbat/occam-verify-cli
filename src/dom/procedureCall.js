"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import LocalContext from "../context/local";
import {
  frameFromFrameAndSubstitutions,
  statementFromStatementAndSubstitutions,
  termFromTermAndSubstitutions
} from "../utilities/substitutions";

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

    const procedure = context.findProcedureByReference(this.reference);

    if (procedure !== null) {
      const procedureString = procedure.getString(),
            procedureBoolean = procedure.isBoolean();

      if (procedureBoolean) {
        const procedureParameterTypesNodeTypes = procedure.areParameterTypesNodeTypes();

        if (procedureParameterTypesNodeTypes) {
          const procedureParametersMatchParameters = procedure.matchParameters(this.parameters);

          if (procedureParametersMatchParameters) {
            verified = true;
          } else {
            context.trace(`The '${procedureString}' procedure's parameters do not match those of the '${procedureCallString}' procedure call.`);
          }
        } else {
          context.trace(`Not all of the '${procedureString}' procedure's parameters' types are node types.`);
        }
      } else {
        context.trace(`The '${procedureString}' procedure is not boolean.`);
      }
    } else {
      context.trace(`The '${procedureCallString}' procedure is not present.`);
    }

    if (verified) {
      context.debug(`...verified the '${procedureCallString}' procedure call.`);
    }

    return verified;
  }

  unifyIndependently(substitutions, context) {
    let unifiedIndependently;

    const procedureCallString = this.string; ///

    context.trace(`Unifying the '${procedureCallString}' procedure call independently...`);

    const procedure = context.findProcedureByReference(this.reference),
          nodes = this.findNodes(substitutions),
          result = procedure.call(nodes);

    if (result) {
      unifiedIndependently = true;
    } else {
      const procedureString = procedure.getString();

      context.trace(`Unable to unify the '${procedureCallString}' procedure call independently becuase the '${procedureString}' procedure returned false.`);
    }

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
