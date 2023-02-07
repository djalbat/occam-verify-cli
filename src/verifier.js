"use strict";

export default class Verifier {
  verifyNode(nodeA, nodeB, substitutions) {
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
              nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

        nodeVerifies = nonTerminalNodeVerifies; ///
      }
    }

    return nodeVerifies;
  }

  verifyNodes(nodesA, nodesB, substitutions) {
    let nodesVerify = false;

    const nodesALength = nodesA.length,
          nodesBLength = nodesB.length;

    if (nodesALength === nodesBLength) {
      nodesVerify = nodesA.every((nodeA, index) => {
        const nodeB = nodesB[index],
              nodeVerifies = this.verifyNode(nodeA, nodeB, substitutions);

        if (nodeVerifies) {
          return true;
        }
      })
    }

    return nodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, substitutions) {
    const matches = terminalNodeA.match(terminalNodeB),
          terminalNodeVerifies = matches;  ///

    return terminalNodeVerifies;
  }

  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            nodesA = nonTerminalNodeAChildNodes, ///
            nodesB = nonTerminalNodeBChildNodes, ///
            nodesVerify = this.verifyNodes(nodesA, nodesB, substitutions);

      nonTerminalNodeVerifies = nodesVerify; ///
    }

    return nonTerminalNodeVerifies;
  }
}
