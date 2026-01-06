"use strict";

import { define } from "../elements";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

class MetaType {
  constructor(context, string, node, name) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.name = name;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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
}

export default define(MetaType);

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
