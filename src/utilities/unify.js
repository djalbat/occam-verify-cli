"use strict";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode}  from "../utilities/name";

const frameMetavariableNodeQuery = nodeQuery("/frame/metavariable"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable");

export function metavariableFromFrameNode(frameNode, localContext) {
  let metavariable = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode)

  if (frameMetavariableNode !== null) {
    const metavariableNode = statementMetavariableNode, ///
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode);

    metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
  }

  return metavariable;
}

export function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const statementMetavariableNode = statementMetavariableNodeQuery(statementNode)

  if (statementMetavariableNode !== null) {
    const metavariableNode = statementMetavariableNode, ///
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode);

    metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
  }

  return metavariable;
}
