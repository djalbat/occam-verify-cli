"use strict";

import shim from "./shim";

import { metaTypeNameFromMetaTypeNode } from "./utilities/name";

class MetaType {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  isEqualTo(metaType) {
    const equalTo = (this === metaType);

    return equalTo;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchMetaTypeName(metaTypeName) {
    const metaTypeNameMatches = (this.name === metaTypeName);

    return metaTypeNameMatches;
  }

  matchMetaTypeNode(metaTypeNode) {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          metaTypeNameMatches = this.matchMetaTypeName(metaTypeName),
          metaTypeNodeMatches = metaTypeNameMatches;  ///

    return metaTypeNodeMatches;
  }

  asString(tokens) {
    const string = `${this.name}`;

    return string;
  }

  static fromMetaTypeNode(metaTypeNode, localContext) {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          name = metaTypeName,  ///
          metaType = new MetaType(name);

    return metaType;
  }
}

Object.assign(shim, {
  MetaType
});

export default MetaType;

export function metaTypeFromJSON(json, fileContext) {
  let metaType;

  const { name } = json;

  metaType = new MetaType(name);

  return metaType;
}
