"use strict";

import { metaTypeNameFromMetaTypeNode } from "./utilities/name";
import { CONTEXT_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

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

class ContextMetaType extends MetaType {
  static fromNothing() {
    const name = CONTEXT_META_TYPE_NAME,
          contextMetaType = new ContextMetaType(name);

    return contextMetaType;
  }
}

class StatementMetaType extends MetaType {
  static fromNothing() {
    const name = STATEMENT_META_TYPE_NAME,
          statementMetaType = new StatementMetaType(name);

    return statementMetaType;
  }
}

export const contextMetaType = ContextMetaType.fromNothing();

export const statementMetaType = StatementMetaType.fromNothing();

export function metaTypeFromJSONAndFileContext(json, fileContext) {
  let metaType;

  const { name } = json;

  metaType = new MetaType(name);

  return metaType;
}
