"use strict";

import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "./utilities/terminalNodes";

export default class Unifier {
  unify(nodeA, nodeB, ...remainingArguments) {
    let unified;

    const nodeUnified = this.unifyNode(nodeA, nodeB, ...remainingArguments);

    unified = nodeUnified;  ///

    return unified;
  }

  unifyNode(nodeA, nodeB, ...remainingArguments) {
    let nodeUnified = false;

    const nodeATerminalNode = nodeA.isTerminalNode(),
          nodeBTerminalNode = nodeB.isTerminalNode(),
          nodeANonTerminalNode = nodeA.isNonTerminalNode(),
          nodeBNonTerminalNode = nodeB.isNonTerminalNode();

    if (false) {
      ///
    } else if (nodeATerminalNode && nodeBTerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeUnified = this.unifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments);

      nodeUnified = terminalNodeUnified;  ///
    } else if (nodeANonTerminalNode && nodeBNonTerminalNode) {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments);

      nodeUnified = nonTerminalNodeUnified; ///
    }

    return nodeUnified;
  }

  unifyChildNodes(childNodesA, childNodesB, ...remainingArguments) {
    let childNodesUnified = false;

    const childNodesALength = childNodesA.length,
          childNodesBLength = childNodesB.length;

    if (childNodesALength === childNodesBLength) {
      const childTerminalNodeMapA = terminalNodeMapFromNodes(childNodesA),
            childTerminalNodeMapB = terminalNodeMapFromNodes(childNodesB),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(childTerminalNodeMapA, childTerminalNodeMapB);

      if (terminalNodeMapsEqual) {
        const index = 0,
              childNodesVerifyAhead = this.unifyChildNodesAhead(index, childNodesA, childNodesB, ...remainingArguments);

        childNodesUnified = childNodesVerifyAhead; ///
      }
    }

    return childNodesUnified;
  }

  unifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) { ///
    let terminalNodeUnified;

    const unifyAhead = remainingArguments.pop(),
          unifyiedAhead = unifyAhead();

    terminalNodeUnified = unifyiedAhead;  ///

    return terminalNodeUnified;
  }

  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
    let nonTerminalNodeUnified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), ///
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(); ///

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesUnified = this.unifyChildNodes(childNodesA, childNodesB, ...remainingArguments);

      nonTerminalNodeUnified = childNodesUnified; ///
    }

    return nonTerminalNodeUnified;
  }

  unifyChildNodesAhead(index, childNodesA, childNodesB, ...remainingArguments) {
    let childNodesUnified;

    const unifyAhead = remainingArguments.pop(), ///
          childNodesALength = childNodesA.length;

    if (index === childNodesALength) {
      const unifyiedAhead = unifyAhead();

      childNodesUnified = unifyiedAhead; ///
    } else {
      const childNodeA = childNodesA[index],
            childNodeB = childNodesB[index],
            nodeA = childNodeA, ///
            nodeB = childNodeB, ///
            nodeUnified = this.unifyNode(nodeA, nodeB, ...remainingArguments, () => {
              remainingArguments.push(unifyAhead); ///

              const aheadIndex = index + 1,
                    childNodesVerifyAhead = this.unifyChildNodesAhead(aheadIndex, childNodesA, childNodesB, ...remainingArguments);

              return childNodesVerifyAhead;
            });

      childNodesUnified = nodeUnified;  ///
    }

    return childNodesUnified;
  }
}

export function unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
  let unified = false;

  nodeQueryMaps.some((nodeQueryMap) => {
    const { nodeQueryA, nodeQueryB, unify } = nodeQueryMap;

    const nodeA = nodeQueryA(nonTerminalNodeA),  ///
          nodeB = nodeQueryB(nonTerminalNodeB);  ///

    if ((nodeA !== null) && (nodeB !== null)) {
      unified = unify(nodeA, nodeB, ...remainingArguments);

      return true;
    }
  });

  return unified;
}
