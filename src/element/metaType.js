"use strict";

import Element from "../element";

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

  matchMetaTypeName(metaTypeName) {
    const metaTypeNameMatches = (metaTypeName === this.name);

    return metaTypeNameMatches;
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
          metaType = metaTypeFromMetaTypeName(metaTypeName);

    return metaType;
  }

  static fromName(name) {
    const context = null,
          string = name,
          node = null,
          metaType = new MetaType(context, string, node, name);

    return metaType;
  }
});
