"use strict";

import { define } from "../elements";

export default define(class Parameter {
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

    const parameter = this, ///
          substitution = substitutions.findSubstitution((substitution) => {
            const nameMatches = substitution.matchParameter(parameter);

            if (nameMatches) {
              return true;
            }
          });

    if (substitution !== null) {
      replacementNode = substitution.getReplacementNode();
    }

    return replacementNode;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static name = "Parameter";

  static fromJSON(json, context) {
    const { name } = json,
          parameter = new Parameter(name);

    return parameter;
  }

  static fromParameterNode(parameterNode, context) {
    const parameterName = parameterNode.getParameterName(),
          name = parameterName, ///
          parameter = new Parameter(name);

    return parameter;
  }
});
