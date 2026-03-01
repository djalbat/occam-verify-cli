"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import {nameToNameJSON} from "../utilities/json";

export default define(class Property extends Element {
  constructor(context, string, node, name, nominalTypeName) {
    super(context, string, node);

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
    const nominalTypeNameJSON = nameToNameJSON(this.nominalTypeName),
          nameJSON = nameToNameJSON(this.name),
          nominalTypeName = nominalTypeNameJSON,  ///
          name = nameJSON,  ///
          string = this.getString(),
          json = {
            string,
            name,
            nominalTypeName
          };

    return json;
  }

  static name = "Property";

  static fromJSON(json, context) {
    debugger
  }
});
