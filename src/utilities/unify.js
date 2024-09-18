"use strict";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable");

export function variableFromTermNode(termNode, localContext) {
  let variable = null;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    variable = localContext.findVariableByVariableNode(variableNode);
  }

  return variable;
}

export function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const metavariableNode = metavariableNodeQuery(statementNode)

  if (metavariableNode !== null) {
    metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
  }

  return metavariable;
}
