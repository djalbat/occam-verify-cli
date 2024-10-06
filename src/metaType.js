"use strict";

import shim from "./shim";

import { metaTypeNameFromMetaTypeNode } from "./utilities/name";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

class MetaType {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getString() {
    const string = this.name; ///

    return string;
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

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { name } = json,
          metaType = new MetaType(name);

    return metaType;
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

class FrameMetaType extends MetaType {
  static fromNothing() {
    const name = FRAME_META_TYPE_NAME,
          frameMetaType = new FrameMetaType(name);

    return frameMetaType;
  }
}

class ReferenceMetaType extends MetaType {
  static fromNothing() {
    const name = REFERENCE_META_TYPE_NAME,
          referenceMetaType = new ReferenceMetaType(name);

    return referenceMetaType;
  }
}

class StatementMetaType extends MetaType {
  static fromNothing() {
    const name = STATEMENT_META_TYPE_NAME,
          statementMetaType = new StatementMetaType(name);

    return statementMetaType;
  }
}

export const frameMetaType = FrameMetaType.fromNothing();
export const referenceMetaType = ReferenceMetaType.fromNothing();
export const statementMetaType = StatementMetaType.fromNothing();
