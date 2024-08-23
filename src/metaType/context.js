"use strict";

import MetaType from "../metaType";

import { CONTEXT_META_TYPE_NAME } from "../metaTypeNames";

class ContextMetaType extends MetaType {
  static fromNothing() {
    const name = CONTEXT_META_TYPE_NAME,
          contextMetaType = new ContextMetaType(name);

    return contextMetaType;
  }
}

const contextMetaType = ContextMetaType.fromNothing();

export default contextMetaType;
