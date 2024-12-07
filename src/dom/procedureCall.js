"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const procedureCallNodeQuery = nodeQuery("/statement/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(reference) {
    this.reference = reference;
  }

  getReference() {
    return this.reference;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const procedureCallString = this.string; ///

    context.trace(`Verifying the '${procedureCallString}' procedure call...`);

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
