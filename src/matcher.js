"use strict";

export default class Matcher {
  matchNode(nodeA, nodeB, substitutions, depth = Infinity) {
    let nodeMatches = false;

    if (depth === 0) {
      nodeMatches = true;
    } else {
      const nodeATerminalNode = nodeA.isTerminalNode(),
            nodeBTerminalNode = nodeB.isTerminalNode();

      if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
          const terminalNodeA = nodeA,  ///
                terminalNodeB = nodeB,  ///
                terminalNodeMatches = this.matchTerminalNode(terminalNodeA, terminalNodeB);

          nodeMatches = terminalNodeMatches;  ///
        } else {
          const nonTerminalNodeA = nodeA,  ///
                nonTerminalNodeB = nodeB, ///
                nonTerminalNodeMatches = this.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, depth);

          nodeMatches = nonTerminalNodeMatches; ///
        }
      }
    }

    return nodeMatches;
  }

  matchNodes(nodesA, nodesB, substitutions, depth = Infinity) {
    let nodesMatch = false;

    const nodesALength = nodesA.length,
          nodesBLength = nodesB.length;

    if (nodesALength === nodesBLength) {
      depth --;

      nodesMatch = nodesA.every((nodeA, index) => {
        const nodeB = nodesB[index],
              nodeMatches = this.matchNode(nodeA, nodeB, substitutions, depth);

        if (nodeMatches) {
          return true;
        }
      })
    }

    return nodesMatch;
  }

  matchTerminalNode(terminalNodeA, terminalNodeB, substitutions, depth) {
    const matches = terminalNodeA.match(terminalNodeB),
          terminalNodeMatches = matches;  ///

    return terminalNodeMatches;
  }

  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, depth = Infinity) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            nodesA = nonTerminalNodeAChildNodes, ///
            nodesB = nonTerminalNodeBChildNodes, ///
            nodesMatch = this.matchNodes(nodesA, nodesB, substitutions, depth);

      nonTerminalNodeMatches = nodesMatch; ///
    }

    return nonTerminalNodeMatches;
  }
}

export const matcher = new Matcher();
