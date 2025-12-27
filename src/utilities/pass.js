"use strict";

import { arrayUtilities } from "necessary";

import { FUNCTION } from "../constants";

const { match, last } = arrayUtilities;

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

export function isLastRemainingArgumentFunction(remainingArguments) {
  let lastRemainingArgumentFunction = false;

  const remainingArgumentsLength = remainingArguments.length;

  if (remainingArgumentsLength > 0) {
    const lastRemainingArgument = last(remainingArguments);

    lastRemainingArgumentFunction = (typeof lastRemainingArgument === FUNCTION);
  }

  return lastRemainingArgumentFunction;
}
