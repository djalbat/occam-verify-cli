"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateParameter } from "../process/instantiate";
import { nameFromParaneterNode, identifierFromParameterNode } from "../utilities/element";

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
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "Parameter";

  static fromJSON(json, context) {
    const parameter = instantiate((context) => {
      const { string } = json,
            parameterNode = instantiateParameter(string, context),
            node = parameterNode,  ///
            name = nameFromParaneterNode(parameterNode, context),
            identifier = identifierFromParameterNode(parameterNode, context);

      context = null;

      const parameter = new Parameter(context, string, node, name, identifier);

      return parameter;
    }, context);

    return parameter;
  }
});
