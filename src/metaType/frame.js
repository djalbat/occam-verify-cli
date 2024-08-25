"use strict";

import MetaType from "../metaType";

import { FRAME_META_TYPE_NAME } from "../metaTypeNames";

class FrameMetaType extends MetaType {
  static fromNothing() {
    const name = FRAME_META_TYPE_NAME,
          frameMetaType = new FrameMetaType(name);

    return frameMetaType;
  }
}

const frameMetaType = FrameMetaType.fromNothing();

export default frameMetaType;
