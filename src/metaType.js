"use strict";

import { metaTypeNameFromMetaTypeNode } from "./utilities/name";

export default class MetaType {
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

  match(metaType) {
    const equalToMetaType = this.isEqualTo(metaType),
          matches = equalToMetaType;  ///

    return matches;
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

  static fromMetaTypeName(metaTypeName) {
    const name = metaTypeName,  ///
          metaType = new MetaType(name);

    return metaType;
  }
}

export function metaTypeFromJSONAndFileContext(json, fileContext) {
  let metaType;

  const { name } = json;

  metaType = new MetaType(name);

  return metaType;
}
