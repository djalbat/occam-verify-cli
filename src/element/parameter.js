"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Parameter extends Element {
  constructor(context, string, node, name, identifier) {
    super(context, string, node, identifier);

    this.name = name;
    this.identifier = identifier;
  }
  
  getName() {
    return this.name;
  }

  getIdentifier() {
    return this.identifier;
  }

  getParameterNode() {
    const node = this.getNode(),
          parameterNode = node; ///

    return parameterNode;
  }

  findPrimitive(substitutions) {
    let primitive = null;

    const parameter = this, ///
          substitution = substitutions.find((substitution) => {
            const substitutionComparesToParamter = substitution.compareParameter(parameter);

            if (substitutionComparesToParamter) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      primitive = substitution.getPrimitive();
    }

    return primitive;
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
    debugger
  }
});
