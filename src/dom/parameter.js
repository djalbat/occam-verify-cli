"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Parameter {
  constructor(term, frame, statement) {
    this.term = term;
    this.frame = frame;
    this.statement = statement;
  }

  getTerm() {
    return this.term;
  }

  getFrame() {
    return this.frame;
  }

  getStatement() {
    return this.statement;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const parameterString = this.string; ///

    context.trace(`Verifying the '${parameterString}' parameter...`);

    debugger

    if (verified) {
      context.debug(`...verified the '${parameterString}' parameter.`);
    }

    return verified;
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    let parameter = null;

    if (parameterNode !== null) {
      const { Term, Frame, Statement } = dom,
            term = Term.fromParameterNode(parameterNode, context),
            frame = Frame.fromParameterNode(parameterNode, context),
            statement = Statement.fromParameterNode(parameterNode, context);

      parameter = new Parameter(term, frame, statement);
    }

    return parameter;
  }
});
