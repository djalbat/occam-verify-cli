"use strict";

import { nodeQuery } from "../utilities/query";

const termVariableNodeQuery = nodeQuery("/term/variable"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable");

export function variableFromTermNode(termNode, localContext) {
  let variable = null;

  const termVariableNode = termVariableNodeQuery(termNode);

  if (termVariableNode !== null) {
    const variableNode = termVariableNode;  ///

    variable = localContext.findVariableByVariableNode(variableNode);
  }

  return variable;
}

export function metavariableFromFrameNode(frameNode, localContext) {
  let metavariable = null;

  const frameMetavariableNode = frameMetavariableNodeQuery(frameNode)

  if (frameMetavariableNode !== null) {
    const metavariableNode = frameMetavariableNode; ///

    metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
  }

  return metavariable;
}

export function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const statementMetavariableNode = statementMetavariableNodeQuery(statementNode)

  if (statementMetavariableNode !== null) {
    const metavariableNode = statementMetavariableNode; ///

    metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
  }

  return metavariable;
}
