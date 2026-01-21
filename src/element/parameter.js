"use strict";

import Element from "../element";

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

  findReplacementNode(substitutions) {
    let replacementNode = null;

    const parameter = this, ///
          substitution = substitutions.findSubstitution((substitution) => {
            const substitutionComparesToParamter = substitution.compareParameter(parameter);

            if (substitutionComparesToParamter) {
              return true;
            }
          }) || null;

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
    const { name, identifier } = json,
          string = null,
          node = null,
          parameter = new Parameter(context, string, node, name, identifier);

    return parameter;
  }
});
