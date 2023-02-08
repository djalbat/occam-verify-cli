"use strict";

export default class Verifier {
  verifyNode(nodeA, nodeB, ...remainingArguments) {
    let nodeVerifies = false;

    const nodeATerminalNode = nodeA.isTerminalNode(),
          nodeBTerminalNode = nodeB.isTerminalNode();

    if (nodeATerminalNode === nodeBTerminalNode) {
      if (nodeATerminalNode) {
        const terminalNodeA = nodeA,  ///
              terminalNodeB = nodeB,  ///
              terminalNodeVerifies = this.verifyTerminalNode(terminalNodeA, terminalNodeB);

        nodeVerifies = terminalNodeVerifies;  ///
      } else {
        const nonTerminalNodeA = nodeA,  ///
              nonTerminalNodeB = nodeB, ///
              nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments);

        nodeVerifies = nonTerminalNodeVerifies; ///
      }
    }

    return nodeVerifies;
  }

  verifyNodes(nodesA, nodesB, ...remainingArguments) {
    let nodesVerify = false;

    const nodesALength = nodesA.length,
          nodesBLength = nodesB.length;

    if (nodesALength === nodesBLength) {
      nodesVerify = nodesA.every((nodeA, index) => {
        const nodeB = nodesB[index],
              nodeVerifies = this.verifyNode(nodeA, nodeB, ...remainingArguments);

        if (nodeVerifies) {
          return true;
        }
      })
    }

    return nodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) {
    const matches = terminalNodeA.match(terminalNodeB),
          terminalNodeVerifies = matches;  ///

    return terminalNodeVerifies;
  }

  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            nodesA = nonTerminalNodeAChildNodes, ///
            nodesB = nonTerminalNodeBChildNodes, ///
            nodesVerify = this.verifyNodes(nodesA, nodesB, ...remainingArguments);

      nonTerminalNodeVerifies = nodesVerify; ///
    }

    return nonTerminalNodeVerifies;
  }
}
