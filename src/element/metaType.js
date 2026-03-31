"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class MetaType extends Element {
  constructor(context, string, node, lineIndex, name) {
    super(context, string, node, lineIndex);

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

  static name = "MetaType";

  toJSON() {
    const string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static fromJSON(json, context) {
    const { string } = json,
          metaTypeName = string,  ///
          metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromName(name, context) {
    const string = name,  ///
          node = null,
          lineIndex = null,
          metaType = new MetaType(context, string, node, lineIndex, name);

    return metaType;
  }
});
