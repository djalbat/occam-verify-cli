"use strict";

import { NOT } from "../constants";
import { nodeQuery } from "../utilities/query";

const secondOperatorTerminalNodeQuery = nodeQuery("/*/@operator[1]");

export function isAssertionNegated(assertionNode) {
  const secondOperatorTerminalNode = secondOperatorTerminalNodeQuery(assertionNode),
        content = secondOperatorTerminalNode.getContent(),
        assertionNegated = (content === NOT);

  return assertionNegated;
}
