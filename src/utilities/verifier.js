"use strict";

export function verifyNode(nodeQueryMaps, nonTerminalNode, ...remainingArguments) {
  let nodeVerified;

  nodeVerified = nodeQueryMaps.some((nodeQueryMap) => {
    let nodeVerified = false;

    const { nodeQuery, verifyNode } = nodeQueryMap;

    const node = nodeQuery(nonTerminalNode);

    if (node !== null) {
      nodeVerified = verifyNode(node, ...remainingArguments);
    }

    if (nodeVerified) {
      return true;
    }
  });

  return nodeVerified;
}

export function verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
  let nodesVerified;

  nodesVerified = nodeQueryMaps.some((nodeQueryMap) => {
    let nodesVerified = false;

    const { nodeQueryA, nodeQueryB, verifyNodes } = nodeQueryMap;

    const nodeA = nodeQueryA(nonTerminalNodeA),  ///
          nodeB = nodeQueryB(nonTerminalNodeB);  ///

    if ((nodeA !== null) && (nodeB !== null)) {
      nodesVerified = verifyNodes(nodeA, nodeB, ...remainingArguments);
    }

    if (nodesVerified) {
      return true;
    }
  });

  return nodesVerified;
}
