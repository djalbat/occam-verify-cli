"use strict";

import { match } from "../utilities/array";

export function terminalNodeMapFromNodes(nodes) {
  const terminalNodeMap = {};

  nodes.forEach((node, index) => {
    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node;  //

      terminalNodeMap[index] = terminalNode;
    }
  });

  return terminalNodeMap;
}

export function areTerminalNodeMapsEqual(terminalNodeMapA, terminalNodeMapB) {
  let terminalNodeMapsEqual = false;

  const indexesA = Object.keys(terminalNodeMapA), ///
        indexesB = Object.keys(terminalNodeMapB), ///
        terminalNodeMapKeysMatch = match(indexesA, indexesB, (indexA, indexB) => {
          const matches = (indexA === indexB);

          if (matches) {
            return true;
          }
        });

  if (terminalNodeMapKeysMatch) {
    const terminalNodesA = Object.values(terminalNodeMapA), ///
          terminalNodesB = Object.values(terminalNodeMapB), ///
          terminalNodeMapValuesMatch = match(terminalNodesA, terminalNodesB, (terminalNodeA, terminalNodeB) => {
            const matches = terminalNodeA.match(terminalNodeB);

            if (matches) {
              return true;
            }
          });

    terminalNodeMapsEqual = terminalNodeMapValuesMatch; ///
  }

  return terminalNodeMapsEqual;
}
