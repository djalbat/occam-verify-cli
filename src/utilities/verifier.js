"use strict";

export function verifyNode(nodeQueryMaps, nonTerminalNode, ...remainingArguments) {
  let nodeVerified = false;

  nodeVerified = nodeQueryMaps.some((nodeQueryMap) => {
    const { nodeQuery, verifyNode } = nodeQueryMap;

    const node = nodeQuery(nonTerminalNode);

    if (node !== null) {
      nodeVerified = verifyNode(node, ...remainingArguments);

      return true;
    }
  });

  return nodeVerified;
}

export function verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
  let nodesVerified = false;

  nodeQueryMaps.some((nodeQueryMap) => {
    const { nodeQueryA, nodeQueryB, verifyNodes } = nodeQueryMap;

    const nodeA = nodeQueryA(nonTerminalNodeA),  ///
          nodeB = nodeQueryB(nonTerminalNodeB);  ///

    if ((nodeA !== null) && (nodeB !== null)) {
      nodesVerified = verifyNodes(nodeA, nodeB, ...remainingArguments);

      return true;
    }
  });

  return nodesVerified;
}
