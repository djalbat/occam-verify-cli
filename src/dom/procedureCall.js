"use strict";

import {nodeQuery, nodesQuery} from "../utilities/query";
import { domAssigned } from "../dom";

const parameterNodesQuery = nodesQuery("/procedureCall/parameter"),
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
      debugger
    }

    return procedureCall;
  }
});
