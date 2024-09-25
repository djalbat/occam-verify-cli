"use strict";

import verifyFrameGivenMetaType from "../verify/frameGivenMetaType";

export default function unifyFrameWithMetaType(frameNode, metaTypeNode, assignments, stated, localContext) {
  let frameUnifiedWithMetaType;

  const metaType = localContext.findMetaTypeByMetaTypeNode(metaTypeNode),
        frameVerifiedGivenMetaType = verifyFrameGivenMetaType(frameNode, metaType, assignments, stated, localContext);

  frameUnifiedWithMetaType = frameVerifiedGivenMetaType;  ///

  return frameUnifiedWithMetaType;
}
