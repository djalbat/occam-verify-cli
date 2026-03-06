"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

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
    const string = this.getString(),
          json = {
            string
          };

    return json;
  }

  static name = "MetaType";

  static fromJSON(json, context) {
    const { string } = json,
          metaTypeName = string,  ///
          metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromName(name, context) {
    const string = name,  ///
          node = null,
          metaType = new MetaType(context, string, node, name);

    return metaType;
  }
});
