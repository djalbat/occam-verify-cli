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

  findReplacementNode(substitutions) {
    let replacementNode = null;

    const substitution = substitutions.findSubstitution((substitution) => {
      const nameMatches = substitution.matchName(this.name);

      if (nameMatches) {
        return true;
      }
    });

    if (substitution !== null) {
      replacementNode = substitution.getReplacementNode();
    }

    return replacementNode;
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
