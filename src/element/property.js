"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateProperty } from "../process/instantiate";
import { nameFromPropertyNode } from "../utilities/element";
import { nominalTypeNameFromJSON, nominalTypeNameToNominalTypeNameJSON } from "../utilities/json";

export default define(class Property extends Element {
  constructor(context, string, node, lineIndex, name, nominalTypeName) {
    super(context, string, node, lineIndex);

    this.name = name;
    this.nominalTypeName = nominalTypeName;
  }

  getName() {
    return this.name;
  }

  getNominalTypeName() {
    return this.nominalTypeName;
  }

  getPropertyNode() {
    const node = this.getNode(),
          properetyNode = node; ///

    return properetyNode;
  }

  comparePropertyName(propertyName) {
    const comparesToPropertyName = (this.name === propertyName);

    return comparesToPropertyName;
  }

  compareNominalTypeName(nominalTypeName) {
    const comparesToNominalTypeName = (this.nominalTypeName === nominalTypeName);

    return comparesToNominalTypeName;
  }

  toJSON() {
    const nominalTypeNameJSON = nominalTypeNameToNominalTypeNameJSON(this.nominalTypeName),
          nominalTypeName = nominalTypeNameJSON,  ///
          string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex,
            nominalTypeName
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
            nominalTypeName = nominalTypeNameFromJSON(json);

      context = null;

      const property = new Property(context, string, node, lineIndex, name, nominalTypeName);

      return property;
    }, context);
  }
});
