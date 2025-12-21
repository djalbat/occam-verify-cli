"use strict";

import { nodeQuery } from "../utilities/query";

const variableIdentifierNodeQuery = nodeQuery("/variable/@identifier!"),
      termVariableIdentifierNodeQuery = nodeQuery("/term/variable!/@identifier!");

export function termVariableIdentifierFromTermNode(TermNode) {
  const termVariableIdentifierTerminalNode = termVariableIdentifierNodeQuery(TermNode),
        termVariableIdentifierTerminalNodeContent = termVariableIdentifierTerminalNode.getContent(),
        termVariableIdentifier = termVariableIdentifierTerminalNodeContent; ///

  return termVariableIdentifier;
}

export function variableIdentifierFromVariableNode(variableNode) {
  const variableIdentifierTerminalNode = variableIdentifierNodeQuery(variableNode),
        variableIdentifierTerminalNodeContent = variableIdentifierTerminalNode.getContent(),
        variableIdentifier = variableIdentifierTerminalNodeContent; ///

  return variableIdentifier;
}
