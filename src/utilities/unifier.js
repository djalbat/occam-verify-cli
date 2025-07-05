"use strict";

import { arrayUtilities } from "necessary";

const { match } = arrayUtilities;

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

export function areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap) {
  let terminalNodeMapsEqual = false;

  const generalIndexes = Object.keys(generalTerminalNodeMap), ///
        specificIndexes = Object.keys(specificTerminalNodeMap), ///
        terminalNodeMapKeysMatch = match(generalIndexes, specificIndexes, (generalIndex, specificIndex) => {
          if (generalIndex === specificIndex) {
            return true;
          }
        });

  if (terminalNodeMapKeysMatch) {
    const generalTerminalNodes = Object.values(generalTerminalNodeMap), ///
          specificTerminalNodes = Object.values(specificTerminalNodeMap), ///
          terminalNodeMapValuesMatch = match(generalTerminalNodes, specificTerminalNodes, (generalTerminalNode, specificTerminalNode) => {
            const generalTerminalNodeMatchesSpecificTerminalNode = generalTerminalNode.match(specificTerminalNode);

            if (generalTerminalNodeMatchesSpecificTerminalNode) {
              return true;
            }
          });

    terminalNodeMapsEqual = terminalNodeMapValuesMatch; ///
  }

  return terminalNodeMapsEqual;
}
