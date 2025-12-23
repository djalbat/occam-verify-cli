"use strict";

import { nodeQuery } from "../utilities/query";

const statementMetavariableNameNodeQuery = nodeQuery("/statement/metavariable!/@name!");

export function statementMetavariableNameFromFrameNode(frmaeNode) {
  const statementMetavariableNameTerminalNode = statementMetavariableNameNodeQuery(frmaeNode),
        statementMetavariableNameTerminalNodeContent = statementMetavariableNameTerminalNode.getContent(),
        statementMetavariableName = statementMetavariableNameTerminalNodeContent; ///

  return statementMetavariableName;
}
