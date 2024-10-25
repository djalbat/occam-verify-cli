"use strict";

import { nodeQuery } from "./utilities/query";
import { isLastRemainingArgumentFunction } from "./utilities/arguments";
import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "./utilities/unifier";

const nonTerminalNodeQuery = nodeQuery("/*");

export default class Unifier {
  unify(generalNode, specificNode, ...remainingArguments) {
    let unified;

    const nodeUnified = this.unifyNode(generalNode, specificNode, ...remainingArguments);

    unified = nodeUnified;  ///

    return unified;
  }

  unifyNode(generalNode, specificNode, ...remainingArguments) {
    let nodeUnified = false;

    const generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode,  ///
            terminalNodeUnified = this.unifyTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);

      nodeUnified = terminalNodeUnified;  ///
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode, ///
            nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);

      nodeUnified = nonTerminalNodeUnified; ///
    }

    return nodeUnified;
  }

  unifyChildNodes(generalChildNodes, specificChildNodes, ...remainingArguments) {
    let childNodesUnified = false;

    const generalChildNodesLength = generalChildNodes.length,
          specificChildNodesLength = specificChildNodes.length;

    if (generalChildNodesLength === specificChildNodesLength) {
      const specificTerminalNodeMap = terminalNodeMapFromNodes(specificChildNodes),
            generalTerminalNodeMap = terminalNodeMapFromNodes(generalChildNodes),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(generalTerminalNodeMap, specificTerminalNodeMap);

      if (terminalNodeMapsEqual) {
        const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

        if (lastRemainingArgumentFunction) {
          const index = 0,
                childNodesUnifiedAhead = this.unifyChildNodesAhead(index, generalChildNodes, specificChildNodes,...remainingArguments);

          childNodesUnified = childNodesUnifiedAhead; ///
        } else {
          childNodesUnified = generalChildNodes.every((generalChildNode, index) => {
            const specificChildNode = specificChildNodes[index],
                  specificNode = specificChildNode, ///
                  generalNode = generalChildNode, ///
                  nodeUnified = this.unifyNode(generalNode, specificNode, ...remainingArguments);

            if (nodeUnified) {
              return true;
            }
          });
        }
      }
    }

    return childNodesUnified;
  }

  unifyTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
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

  unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let nonTerminalNodeUnified;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        unify: (generalNode, specificNode, ...remainingArguments) => {
          let nonTerminalNodeUnified;

          const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeBRuleNam = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName === specificNonTerminalNodeBRuleNam) {
            const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeBChildNode = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeBChildNode, ///
                  childNodesUnified = this.unifyChildNodes(generalChildNodes, specificChildNodes, ...remainingArguments);

            nonTerminalNodeUnified = childNodesUnified; ///
          }

          return nonTerminalNodeUnified;
        }
      }
    ]

    let nodeUnified = false;

    maps.some((map) => {
      const { generalNodeQuery, specificNodeQuery, unify } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode !== null) && (specificNode !== null)) {
        nodeUnified = unify(generalNode, specificNode, ...remainingArguments);

        return true;
      }
    });

    nonTerminalNodeUnified = nodeUnified; ///

    return nonTerminalNodeUnified;
  }

  unifyChildNodesAhead(index, generalChildNodes, specificChildNodes, ...remainingArguments) {
    let childNodesUnified;

    const unifyAhead = remainingArguments.pop(), ///
          generalChildNodesLength = generalChildNodes.length;

    if (index === generalChildNodesLength) {
      const unifiedAhead = unifyAhead();

      childNodesUnified = unifiedAhead; ///
    } else {
      const generalChildNode = generalChildNodes[index],
            specificChildNode = specificChildNodes[index],
            generalNode = generalChildNode, ///
            specificNode = specificChildNode, ///
            nodeUnified = this.unifyNode(generalNode, specificNode, ...remainingArguments, () => {
              remainingArguments.push(unifyAhead); ///

              const aheadIndex = index + 1,
                    childNodesUnifiedAhead = this.unifyChildNodesAhead(aheadIndex, generalChildNodes, specificChildNodes, ...remainingArguments);

              return childNodesUnifiedAhead;
            });

      childNodesUnified = nodeUnified;  ///
    }

    return childNodesUnified;
  }
}
