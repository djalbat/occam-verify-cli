"use strict";

import { nodeQuery } from "./utilities/query";
import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "./utilities/unifier";
import {isLastRemainingArgumentFunction} from "./utilities/arguments";

const nonTerminalNodeQuery = nodeQuery("/*");

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
        const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

        if (lastRemainingArgumentFunction) {
          const index = 0,
                childNodesUnifiedAhead = this.unifyChildNodesAhead(index, childNodesA, childNodesB,...remainingArguments);

          childNodesUnified = childNodesUnifiedAhead; ///
        } else {
          childNodesUnified = childNodesA.every((childNodeA, index) => {
            const childNodeB = childNodesB[index],
                  nodeA = childNodeA, ///
                  nodeB = childNodeB, ///
                  nodeUnified = this.unifyNode(nodeA, nodeB, ...remainingArguments);

            if (nodeUnified) {
              return true;
            }
          });
        }
      }
    }

    return childNodesUnified;
  }

  unifyTerminalNode(terminalNodeA, terminalNodeB, ...remainingArguments) { ///
    let terminalNodeUnified;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const unifyAhead = remainingArguments.pop(),
            unifiedAhead = unifyAhead();

      terminalNodeUnified = unifiedAhead;  ///

      remainingArguments.push(unifiedAhead);
    } else {
      terminalNodeUnified = true;
    }

    return terminalNodeUnified;
  }

  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, ...remainingArguments) {
    let nonTerminalNodeUnified;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nobeB, ...remainingArguments) => {
          let nonTerminalNodeUnified;

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
      }
    ]

    let nodeUnified = false;

    maps.some((map) => {
      const { nodeQueryA, nodeQueryB, unify } = map;

      const nodeA = nodeQueryA(nonTerminalNodeA),  ///
            nodeB = nodeQueryB(nonTerminalNodeB);  ///

      if ((nodeA !== null) && (nodeB !== null)) {
        nodeUnified = unify(nodeA, nodeB, ...remainingArguments);

        return true;
      }
    });

    nonTerminalNodeUnified = nodeUnified; ///

    return nonTerminalNodeUnified;
  }

  unifyChildNodesAhead(index, childNodesA, childNodesB, ...remainingArguments) {
    let childNodesUnified;

    const unifyAhead = remainingArguments.pop(), ///
          childNodesALength = childNodesA.length;

    if (index === childNodesALength) {
      const unifiedAhead = unifyAhead();

      childNodesUnified = unifiedAhead; ///
    } else {
      const childNodeA = childNodesA[index],
            childNodeB = childNodesB[index],
            nodeA = childNodeA, ///
            nodeB = childNodeB, ///
            nodeUnified = this.unifyNode(nodeA, nodeB, ...remainingArguments, () => {
              remainingArguments.push(unifyAhead); ///

              const aheadIndex = index + 1,
                    childNodesUnifiedAhead = this.unifyChildNodesAhead(aheadIndex, childNodesA, childNodesB, ...remainingArguments);

              return childNodesUnifiedAhead;
            });

      childNodesUnified = nodeUnified;  ///
    }

    return childNodesUnified;
  }
}
