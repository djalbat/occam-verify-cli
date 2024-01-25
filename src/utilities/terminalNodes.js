"use strict";

import { areArraysEqual } from "../utilities/array";

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
        terminalNodeMapKeysEqual = areArraysEqual(indexesA, indexesB);

  if (terminalNodeMapKeysEqual) {
    const terminalNodesA = Object.keys(terminalNodeMapA), ///
          terminalNodesB = Object.keys(terminalNodeMapB), ///
          terminalNodeMapValuesEqual = areArraysEqual(terminalNodesA, terminalNodesB, (terminalNodeA, terminalNodeB) => {
            const matches = terminalNodeA.match(terminalNodeB);

            if (matches) {
              return true;
            }
          });

    terminalNodeMapsEqual = terminalNodeMapValuesEqual; ///
  }

  return terminalNodeMapsEqual;
}
