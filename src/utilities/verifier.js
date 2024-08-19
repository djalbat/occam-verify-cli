"use strict";

export function verifyNode(nodeQueryMaps, nonTerminalNode, localMetaContext, verifyAhead) {
  let nodeVerified;

  nodeVerified = nodeQueryMaps.some((nodeQueryMap) => {
    let nodeVerified = false;

    const { nodeQuery, verifyNode } = nodeQueryMap;

    const node = nodeQuery(nonTerminalNode);

    if (node !== null) {
      nodeVerified = verifyNode(node, localMetaContext, verifyAhead);
    }

    if (nodeVerified) {
      return true;
    }
  });

  return nodeVerified;
}
