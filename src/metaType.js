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
    const matchesName = (this.name === name);

    return matchesName;
  }

  matchMetaTypeName(metaTypeName) {
    const matchesMetaTypeName = (this.name === metaTypeName);

    return matchesMetaTypeName;
  }

  matchMetaTypeNode(metaTypeNode) {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          matchesMetaTypeName = this.matchMetaTypeName(metaTypeName),
          matchesMetaTypeNode = matchesMetaTypeName;  ///

    return matchesMetaTypeNode;
  }

  asString(tokens) {
    const string = `${this.name}`;

    return string;
  }

  toJSON(tokens) {
    const name = this.name,
          json = {
            name
          };

    return json;
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
