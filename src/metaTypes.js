"use strict";

import elements from "./elements";

import { FRAME_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "./metaTypeNames";

let frameMetaType = null,
    referenceMetaType = null,
    statementMetaType = null;

export function frameMetaTypeFromNothing() {
  if (frameMetaType === null) {
    const { MetaType } = elements,
          name = FRAME_META_TYPE_NAME;  ///

    frameMetaType = MetaType.fromName(name);
  }

  return frameMetaType;
}

export function referenceMetaTypeFromNothing() {
  if (referenceMetaType === null) {
    const { MetaType } = elements,
          name = REFERENCE_META_TYPE_NAME;  ///

    referenceMetaType = MetaType.fromName(name);
  }

  return referenceMetaType;
}

export function statementMetaTypeFromNothing() {
  if (statementMetaType === null) {
    const { MetaType } = elements,
          name = STATEMENT_META_TYPE_NAME;  ///

    statementMetaType = MetaType.fromName(name);
  }

  return statementMetaType;
}
