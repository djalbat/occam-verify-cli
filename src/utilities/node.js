"use strict";

export function matchNode(nodeA, nodeB) {
  let nodeMatches = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeMatches = matchTerminalNode(terminalNodeA, terminalNodeB);

      nodeMatches = terminalNodeMatches;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeMatches = matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

      nodeMatches = nonTerminalNodeMatches; ///
    }
  }

  return nodeMatches;
}

function matchNodes(nodesA, nodesB) {
  let nodesMatch = false;

  const nodesALength = nodesA.length,
        nodesBLength = nodesB.length;

  if (nodesALength === nodesBLength) {
    nodesMatch = nodesA.every((nodeA, index) => {
      const nodeB = nodesB[index],
            nodeMatches = matchNode(nodeA, nodeB);

      if (nodeMatches) {
        return true;
      }
    })
  }

  return nodesMatch;
}

function matchTerminalNode(terminalNodeA, terminalNodeB) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeMatches = matches;  ///

  return terminalNodeMatches;
}

function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB) {
  let nonTerminalNodeMatches = false;

  const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
        nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

  if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
    const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          nodesA = nonTerminalNodeAChildNodes, ///
          nodesB = nonTerminalNodeBChildNodes, ///
          nodesMatch = matchNodes(nodesA, nodesB);

    nonTerminalNodeMatches = nodesMatch; ///
  }

  return nonTerminalNodeMatches;
}
