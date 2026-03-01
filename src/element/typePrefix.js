"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import {nameToNameJSON} from "../utilities/json";

export default define(class TypePrefix extends Element {
  constructor(context, string, node, name) {
    super(context, string, node);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTypePrefixNode() {
    const node = this.getNode(),
          typePrefixNode = node;  ///

    return typePrefixNode;
  }

  compareTypePrefixName(typePrefixName) {
    const comparesToTypePrefixName = (this.name === typePrefixName);

    return comparesToTypePrefixName;
  }

  toJSON() {
    const nameJSON = nameToNameJSON(this.name),
          name = nameJSON,  ///
          string = this.getString(),
          json = {
            string,
            name
          };

    return json;
  }

  static name = "TypePrefix";

  static fromJSON(json, context) {
    debugger
  }
});
