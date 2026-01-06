"use strict";

import Element from "../element";

import { define } from "../elements";
import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

class MetaType extends Element {
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
}

export default define(MetaType);

class FrameMetaType extends MetaType {
  static fromNothing() {
    const context = null,
          string = null,
          node = null,
          name = FRAME_META_TYPE_NAME,
          frameMetaType = new FrameMetaType(context, string, node, name);

    return frameMetaType;
  }
}

class ReferenceMetaType extends MetaType {
  static fromNothing() {
    const context = null,
          string = null,
          node = null,
          name = REFERENCE_META_TYPE_NAME,
          referenceMetaType = new ReferenceMetaType(context, string, node, name);

    return referenceMetaType;
  }
}

class StatementMetaType extends MetaType {
  static fromNothing() {
    const context = null,
          string = null,
          node = null,
          name = STATEMENT_META_TYPE_NAME,
          statementMetaType = new StatementMetaType(context, string, node, name);

    return statementMetaType;
  }
}

export const frameMetaType = FrameMetaType.fromNothing();

export const referenceMetaType = ReferenceMetaType.fromNothing();

export const statementMetaType = StatementMetaType.fromNothing();
