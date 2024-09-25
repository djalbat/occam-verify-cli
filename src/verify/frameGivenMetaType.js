"use strict";

import shim from "../shim";

import { FRAME_META_TYPE_NAME } from "../metaTypeNames";

export default function verifyFrameGivenMetaType(frameNode, metaType, assignments, stated, localContext) {
  let frameVerifiedGivenMetaType;

  const metaTypeName = metaType.getName();

  switch (metaTypeName) {
    case FRAME_META_TYPE_NAME: {
      const { verifyFrame } = shim,
            frames = [],
            frameVerified = verifyFrame(frameNode, frames, stated, localContext)

      frameVerifiedGivenMetaType = frameVerified; ///

      break;
    }

    default: {
      debugger

      break;
    }
  }

  return frameVerifiedGivenMetaType;
}