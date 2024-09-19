"use strict";

import { NOT } from "../constants";
import { nodesQuery } from "../utilities/query";

const operatorTerminalNodesQuery = nodesQuery("/*/@operator");

export function isAssertionNegated(assertionNode) {
  const operatorTerminalNodes = operatorTerminalNodesQuery(assertionNode),
        assertionNegated = operatorTerminalNodes.some((operatorTerminalNode) => {
          const content = operatorTerminalNode.getContent();

          if (content === NOT) {
            return true;
          }
        });

  return assertionNegated;
}
