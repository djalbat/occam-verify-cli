"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateProperty } from "../process/instantiate";
import { nameFromPropertyNode } from "../utilities/element";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

export default define(class Property extends Element {
  constructor(context, string, node, lineIndex, name, type) {
    super(context, string, node, lineIndex);

    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getPropertyNode() {
    const node = this.getNode(),
          properetyNode = node; ///

    return properetyNode;
  }

  setName(name) {
    this.name = name;
  }

  setType(type) {
    this.type = type;
  }

  comparePropertyName(propertyName) {
    const comparesToPropertyName = (this.name === propertyName);

    return comparesToPropertyName;
  }

  verify(properties, context) {
    let verifies = false;

    const propertyString = this.getString();  ///

    context.trace(`Verifying the '${propertyString}' property...`);

    const naemVerifies = this.verifyName(properties, context);

    if (naemVerifies) {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return verifies;
  }

  verifyName(properties, context) {
    let naemVerifies = false;

    const propertyString = this.getString();

    context.trace(`Verifying the '${propertyString}' property's name...`);

    const propertyName = this.name, ///
          count = properties.reduce((count, property) => {
            if (property !== this) {
              const propertyComparesToPropertyName = property.comparePropertyName(propertyName);

              if (propertyComparesToPropertyName) {
                count++;
              }
            }

            return count;
          }, 0);

    if (count === 0) {
      naemVerifies = true;
    } else {
      context.debug(`The '${propertyString}' property appears more than once.`);
    }

    if (naemVerifies) {
      context.debug(`...verified the '${propertyString}' property's name.`);
    }

    return naemVerifies;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.getString(),
          lineIndex = this.getLineIndex(),
          type = typeJSON,  ///
          json = {
            string,
            lineIndex,
            type
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            propertyNode = instantiateProperty(string, context),
            node = propertyNode,  ///
            name = nameFromPropertyNode(propertyNode, context),
            type = typeFromJSON(json, context);

      context = null;

      const property = new Property(context, string, node, lineIndex, name, type);

      return property;
    }, context);
  }
});
