"use strict";

export default class Verifier {
  verifyNode(nodeA, nodeB, substitutions, context) {
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
              nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, context);

        nodeVerifies = nonTerminalNodeVerifies; ///
      }
    }

    return nodeVerifies;
  }

  verifyNodes(nodesA, nodesB, substitutions, context) {
    let nodesVerify = false;

    const nodesALength = nodesA.length,
          nodesBLength = nodesB.length;

    if (nodesALength === nodesBLength) {
      nodesVerify = nodesA.every((nodeA, index) => {
        const nodeB = nodesB[index],
              nodeVerifies = this.verifyNode(nodeA, nodeB, substitutions, context);

        if (nodeVerifies) {
          return true;
        }
      })
    }

    return nodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, substitutions, context) {
    const matches = terminalNodeA.match(terminalNodeB),
          terminalNodeVerifies = matches;  ///

    return terminalNodeVerifies;
  }

  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, context = null) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            nodesA = nonTerminalNodeAChildNodes, ///
            nodesB = nonTerminalNodeBChildNodes, ///
            nodesVerify = this.verifyNodes(nodesA, nodesB, substitutions, context);

      nonTerminalNodeVerifies = nodesVerify; ///
    }

    return nonTerminalNodeVerifies;
  }
}
