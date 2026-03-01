"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { nameToNameJSON } from "../utilities/json";

export default define(class MetaType extends Element {
  constructor(context, string, node, name) {
    super(context, string, node);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getMetaTypeNode() {
    const node = this.getNode(),
          metaTypeNode = node;  ///

    return metaTypeNode;
  }

  isEqualTo(metaType) {
    const equalTo = (this === metaType);

    return equalTo;
  }

  compareMetaTypeName(metaTypeName) {
    const comparesToMetaTypeName = (metaTypeName === this.name);

    return comparesToMetaTypeName;
  }

  toJSON() {
    const nameJSON = nameToNameJSON(this.name),
          string = this.getString(),
          name = nameJSON,  ///
          json = {
            string,
            name
          };

    return json;
  }

  static name = "MetaType";

  static fromJSON(json, context) {
    const { name } = json,
          metaTypeName = name,  ///
          metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromName(name, context) {
    const string = name,
          node = null,
          metaType = new MetaType(context, string, node, name);

    return metaType;
  }
});
