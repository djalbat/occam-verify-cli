"use strict";

import { nodeQuery } from "../utilities/query";

const frameMetavariableNameNodeQuery = nodeQuery("/frame/metavariable!/@name!");

export function frameMetavariableNameFromFrameNode(TermNode) {
  const frameMetavariableNameTerminalNode = frameMetavariableNameNodeQuery(TermNode),
        frameMetavariableNameTerminalNodeContent = frameMetavariableNameTerminalNode.getContent(),
        frameMetavariableName = frameMetavariableNameTerminalNodeContent; ///

  return frameMetavariableName;
}
