"use strict";

function matchNode(nodeA, nodeB, ...remainingArguments) {
  let nodeMatches = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeMatches = this.matchTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments);

      nodeMatches = terminalNodeMatches;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeMatches = this.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments);

      nodeMatches = nonTerminalNodeMatches; ///
    }
  }

  return nodeMatches;
}

function matchNodes(nodesA, nodesB, ...remainingArguments) {
  let nodesMatch = false;

  const nodesALength = nodesA.length,
        nodesBLength = nodesB.length;

  if (nodesALength === nodesBLength) {
    nodesMatch = nodesA.every((nodeA, index) => {
      const nodeB = nodesB[index],
            nodeMatches = this.matchNode(nodeA, nodeB, ...remainingArguments);

      if (nodeMatches) {
        return true;
      }
    })
  }

  return nodesMatch;
}

function matchTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeMatches = matches;  ///

  return terminalNodeMatches;
}

function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
  let nonTerminalNodeMatches = false;

  const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
        nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

  if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
    const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          nodesA = nonTerminalNodeAChildNodes, ///
          nodesB = nonTerminalNodeBChildNodes, ///
          nodesMatch = this.matchNodes(nodesA, nodesB, ...remainingArguments);

    nonTerminalNodeMatches = nodesMatch; ///
  }

  return nonTerminalNodeMatches;
}

const matcherMixins = {
  matchNode,
  matchNodes,
  matchTerminalNode,
  matchNonTerminalNode
};

export default matcherMixins;
