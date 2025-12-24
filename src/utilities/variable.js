"use strict";

import { nodeQuery } from "../utilities/query";

const termVariableIdentifierNodeQuery = nodeQuery("/term/variable!/@identifier!");

export function termVariableIdentifierFromTermNode(TermNode) {
  const termVariableIdentifierTerminalNode = termVariableIdentifierNodeQuery(TermNode),
        termVariableIdentifierTerminalNodeContent = termVariableIdentifierTerminalNode.getContent(),
        termVariableIdentifier = termVariableIdentifierTerminalNodeContent; ///

  return termVariableIdentifier;
}
