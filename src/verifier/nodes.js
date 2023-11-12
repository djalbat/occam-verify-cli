"use strict";

export default class NodesVerifier {
  verifyNode(nodeA, nodeB, ...remainingArguments) {
    let nodeVerified = false;

    const nodeATerminalNode = nodeA.isTerminalNode(),
          nodeBTerminalNode = nodeB.isTerminalNode(),
          nodeANonTerminalNode = nodeA.isNonTerminalNode(),
          nodeBNonTerminalNode = nodeB.isNonTerminalNode();

    if (false) {
      ///
    } else if (nodeATerminalNode && nodeBTerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB);

      nodeVerified = terminalNodeVerified;  ///
    } else if (nodeANonTerminalNode && nodeBNonTerminalNode) {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments);

      nodeVerified = nonTerminalNodeVerified; ///
    }

    return nodeVerified;
  }

  verifyChildNodes(childNodesA, childNodesB, ...remainingArguments) {
    let childNodesVerify = false;

    const childNodesALength = childNodesA.length,
          childNodesBLength = childNodesB.length;

    if (childNodesALength === childNodesBLength) {
      childNodesVerify = childNodesA.every((childNodeA, index) => {
        const childNodeB = childNodesB[index],
              nodeA = childNodeA, ///
              nodeB = childNodeB, ///
              nodeVerified = this.verifyNode(nodeA, nodeB, ...remainingArguments);

        if (nodeVerified) {
          return true;
        }
      });
    }

    return childNodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) {
    let terminalNodeVerified;

    const matches = terminalNodeA.match(terminalNodeB);

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
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesVerify = this.verifyChildNodes(childNodesA, childNodesB, ...remainingArguments);

      nonTerminalNodeVerified = childNodesVerify; ///
    }

    return nonTerminalNodeVerified;
  }
}
