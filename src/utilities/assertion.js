"use strict";

import { NOT } from "../constants";
import { nodesQuery } from "../utilities/query";

const terminalNodesQuery = nodesQuery("/*/@*");

export function isAssertionNegated(assertionNode) {
  const terminalNodes = terminalNodesQuery(assertionNode),
        assertionNegated = terminalNodes.some((terminalNode) => {
          const content = terminalNode.getContent();

          if (content === NOT) {
            return true;
          }
        });

  return assertionNegated;
}
