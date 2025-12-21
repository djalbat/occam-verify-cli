"use strict";

import { nodeQuery } from "../utilities/query";

const metavariableNameNodeQuery = nodeQuery("/metavariable/@name!");

export function metavariableNameFromMetavariableNode(metavariableNode) {
  const metavariableNameTerminalNode = metavariableNameNodeQuery(metavariableNode),
        metavariableNameTerminalNodeContent = metavariableNameTerminalNode.getContent(),
        metavariableName = metavariableNameTerminalNodeContent; ///

  return metavariableName;
}
