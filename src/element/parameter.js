"use strict";

import Element from "../element";

import { define } from "../elements";

export default define(class Parameter extends Element {
  constructor(context, string, node, name) {
    super(context, string, node);

    this.name = name;
  }
  
  getName() {
    return this.name;
  }

  findReplacementNode(substitutions) {
    let replacementNode = null;

    const parameter = this, ///
          substitution = substitutions.findSubstitution((substitution) => {
            const substitutionComparesToParamter = substitution.compareParameter(parameter);

            if (substitutionComparesToParamter) {
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
          string = null,
          node = null,
          parameter = new Parameter(context, string, node, name);

    return parameter;
  }
});
