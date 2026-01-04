"use strict";

import { define } from "../elements";

export default define(class Parameter {
  constructor(context, string, node, name) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.name = name;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
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
});
