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

  isEqualTo(metaType) {
    const equalTo = (this === metaType);

    return equalTo;
  }

  compareMetaTypeName(metaTypeName) {
    const comparesToMetaTypeName = (metaTypeName === this.name);

    return comparesToMetaTypeName;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static name = "MetaType";

  static fromJSON(json, context) {
    const { name } = json,
          metaTypeName = name,  ///
          metaType = findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromName(name, context) {
    const string = name,
          node = null,
          metaType = new MetaType(context, string, node, name);

    return metaType;
  }
});
