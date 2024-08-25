"use strict";

import MetaType from "../metaType";

import { REFERENCE_META_TYPE_NAME } from "../metaTypeNames";

class ReferenceMetaType extends MetaType {
  static fromNothing() {
    const name = REFERENCE_META_TYPE_NAME,
          referenceMetaType = new ReferenceMetaType(name);

    return referenceMetaType;
  }
}

const referenceMetaType = ReferenceMetaType.fromNothing();

export default referenceMetaType;
