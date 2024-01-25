"use strict";

import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "../utilities/terminalNodes";

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
            terminalNodeVerified = this.verifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments);

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
      const childTerminalNodeMapA = terminalNodeMapFromNodes(childNodesA),
            childTerminalNodeMapB = terminalNodeMapFromNodes(childNodesB),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(childTerminalNodeMapA, childTerminalNodeMapB);

      if (terminalNodeMapsEqual) {
        const index = 0,
              childNodesVerifyAhead = this.verifyChildNodesAhead(index, childNodesA, childNodesB, ...remainingArguments);

        childNodesVerify = childNodesVerifyAhead; ///
      }
    }

    return childNodesVerify;
  }

  verifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) { ///
    let terminalNodeVerified;

    const verifyAhead = remainingArguments.pop(),
          verifiedAhead = verifyAhead();

    terminalNodeVerified = verifiedAhead;  ///

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

  verifyChildNodesAhead(index, childNodesA, childNodesB, ...remainingArguments) {
    let childNodesVerify;

    const verifyAhead = remainingArguments.pop(), ///
          childNodesALength = childNodesA.length;

    if (index === childNodesALength) {
      const verifiedAhead = verifyAhead();

      childNodesVerify = verifiedAhead; ///
    } else {
      const childNodeA = childNodesA[index],
            childNodeB = childNodesB[index],
            nodeA = childNodeA, ///
            nodeB = childNodeB, ///
            nodeVerified = this.verifyNode(nodeA, nodeB, ...remainingArguments, () => {
              remainingArguments.push(verifyAhead); ///

              const aheadIndex = index + 1,
                    childNodesVerifyAhead = this.verifyChildNodesAhead(aheadIndex, childNodesA, childNodesB, ...remainingArguments);

              return childNodesVerifyAhead;
            });

      childNodesVerify = nodeVerified;  ///
    }

    return childNodesVerify;
  }
}
