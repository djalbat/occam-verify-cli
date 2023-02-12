"use strict";

import { META_TYPE_KIND } from "./kinds";
import { STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

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

  asString(tokens) {
    const string = `${this.name}`;

    return string;
  }

  toJSON(tokens) {
    const kind = META_TYPE_KIND,
          name = this.name,
          json = {
            kind,
            name
          };

    return json;
  }

  static fromMetaTypeName(metaTypeName) {
    const name = metaTypeName,  ///
          metaType = new MetaType(name);

    return metaType;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let metaType;

    const { name } = json;

    metaType = new MetaType(name);

    return metaType;
  }
}

class StatementMetaType extends MetaType {
  static fromNothing() {
    const name = STATEMENT_META_TYPE_NAME,
          objectMetaType = new StatementMetaType(name);

    return objectMetaType;
  }
}

export const statementMetaType = StatementMetaType.fromNothing();
