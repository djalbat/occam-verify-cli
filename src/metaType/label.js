"use strict";

import MetaType from "../metaType";

import { LABEL_META_TYPE_NAME } from "../metaTypeNames";

class LabelMetaType extends MetaType {
  static fromNothing() {
    const name = LABEL_META_TYPE_NAME,
          labelMetaType = new LabelMetaType(name);

    return labelMetaType;
  }
}

const labelMetaType = LabelMetaType.fromNothing();

export default labelMetaType;
