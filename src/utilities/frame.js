"use strict";

import { nodeQuery } from "../utilities/query";

const frameMetavariableNameNodeQuery = nodeQuery("/frame/assumption!/metavariable!/@name!");

export function frameMetavariableNameFromFrameNode(frmaeNode) {
  const frameMetavariableNameTerminalNode = frameMetavariableNameNodeQuery(frmaeNode),
        frameMetavariableNameTerminalNodeContent = frameMetavariableNameTerminalNode.getContent(),
        frameMetavariableName = frameMetavariableNameTerminalNodeContent; ///

  return frameMetavariableName;
}
