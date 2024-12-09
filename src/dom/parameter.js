"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/parameter/@name");

export default domAssigned(class Parameter {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getString() {
    const string = this.name; ///

    return string;
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
    const nameTerminalNode = nameTerminalNodeQuery(parameterNode),
          nameTerminalNodeContent = nameTerminalNode.getContent(),
          name = nameTerminalNodeContent, ///
          parameter = new Parameter(name);

    return parameter;
  }
});
