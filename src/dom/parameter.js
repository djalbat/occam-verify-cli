"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class Parameter {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getString() {
    const string = this.value; ///

    return string;
  }

  findReplacementNode(substitutions) {
    let replacementNode = null;

    const substitution = substitutions.findSubstitution((substitution) => {
      const valueMatches = substitution.matchValue(this.value);

      if (valueMatches) {
        return true;
      }
    });

    if (substitution !== null) {
      replacementNode = substitution.getReplacementNode();
    }

    return replacementNode;
  }

  toJSON() {
    const value = this.value,
          json = {
            value
          };

    return json;
  }

  static name = "Parameter";

  static fromJSON(json, context) {
    const { value } = json,
          parameter = new Parameter(value);

    return parameter;
  }

  static fromParameterNode(parameterNode, context) {
    const parameterValue = parameterNode.getParameterValue(),
          value = parameterValue, ///
          parameter = new Parameter(value);

    return parameter;
  }
});
