"use strict";

export default class Verifier {
  verifyNode(nodeA, nodeB, ...remainingArguments) {
    let nodeVerified = false;

    const nodeATerminalNode = nodeA.isTerminalNode(),
          nodeBTerminalNode = nodeB.isTerminalNode();

    if (nodeATerminalNode === nodeBTerminalNode) {
      if (nodeATerminalNode) {
        const terminalNodeA = nodeA,  ///
              terminalNodeB = nodeB,  ///
              terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB);

        nodeVerified = terminalNodeVerified;  ///
      } else {
        const nonTerminalNodeA = nodeA,  ///
              nonTerminalNodeB = nodeB, ///
              nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments);

        nodeVerified = nonTerminalNodeVerified; ///
      }
    }

    return nodeVerified;
  }

  verifyNodes(nodesA, nodesB, ...remainingArguments) {
    let nodesVerify = false;

    const nodesALength = nodesA.length,
          nodesBLength = nodesB.length;

    if (nodesALength === nodesBLength) {
      nodesVerify = nodesA.every((nodeA, index) => {
        const nodeB = nodesB[index],
              nodeVerified = this.verifyNode(nodeA, nodeB, ...remainingArguments);

        if (nodeVerified) {
          return true;
        }
      })
    }

    return nodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) {
    const matches = terminalNodeA.match(terminalNodeB),
          terminalNodeVerified = matches;  ///

    return terminalNodeVerified;
  }

  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            nodesA = nonTerminalNodeAChildNodes, ///
            nodesB = nonTerminalNodeBChildNodes, ///
            nodesVerify = this.verifyNodes(nodesA, nodesB, ...remainingArguments);

      nonTerminalNodeVerified = nodesVerify; ///
    }

    return nonTerminalNodeVerified;
  }
}
