"use strict";

import { NOT } from "../constants";
import { nodeQuery } from "../utilities/query";

const secondOperatorTerminalNodeQuery = nodeQuery("/statement/@operator[1]");

export function isStatementNegated(statementNode) {
  const secondOperatorTerminalNode = secondOperatorTerminalNodeQuery(statementNode),
        content = secondOperatorTerminalNode.getContent(),
        statementNegated = (content === NOT);

  return statementNegated;
}
