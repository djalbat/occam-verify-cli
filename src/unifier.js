"use strict";

import { nodeQuery } from "./utilities/query";
import { isLastRemainingArgumentFunction } from "./utilities/arguments";
import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "./utilities/unifier";

const nonTerminalNodeQuery = nodeQuery("/*");

export default class Unifier {
  unify(generalNode, specificNode, ...remainingArguments) {
    let unifies;

    const nodeUnifies = this.unifyNode(generalNode, specificNode, ...remainingArguments);

    unifies = nodeUnifies;  ///

    return unifies;
  }

  unifyNode(generalNode, specificNode, ...remainingArguments) {
    let nodeUnifies = false;

    const generalNodeTerminalNode = generalNode.isTerminalNode(),
          specificNodeTerminalNode = specificNode.isTerminalNode(),
          generalNodeNonTerminalNode = generalNode.isNonTerminalNode(),
          specificNodeNonTerminalNode = specificNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (generalNodeTerminalNode && specificNodeTerminalNode) {
      const generalTerminalNode = generalNode,  ///
            specificTerminalNode = specificNode,  ///
            terminalNodeUnifies = this.unifyTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments);

      nodeUnifies = terminalNodeUnifies;  ///
    } else if (generalNodeNonTerminalNode && specificNodeNonTerminalNode) {
      const generalNonTerminalNode = generalNode,  ///
            specificNonTerminalNode = specificNode, ///
            nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments);

      nodeUnifies = nonTerminalNodeUnifies; ///
    }

    return nodeUnifies;
  }

  unifyChildNodes(generalChildNodes, specificChildNodes, ...remainingArguments) {
    let childNodesUnifies = false;

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
                childNodesUnifiesAhead = this.unifyChildNodesAhead(index, generalChildNodes, specificChildNodes,...remainingArguments);

          childNodesUnifies = childNodesUnifiesAhead; ///
        } else {
          childNodesUnifies = generalChildNodes.every((generalChildNode, index) => {
            const specificChildNode = specificChildNodes[index],
                  specificNode = specificChildNode, ///
                  generalNode = generalChildNode, ///
                  nodeUnifies = this.unifyNode(generalNode, specificNode, ...remainingArguments);

            if (nodeUnifies) {
              return true;
            }
          });
        }
      }
    }

    return childNodesUnifies;
  }

  unifyTerminalNode(generalTerminalNode, specificTerminalNode, ...remainingArguments) { ///
    let terminalNodeUnifies;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const unifyAhead = remainingArguments.pop(),
            unifiesAhead = unifyAhead();

      terminalNodeUnifies = unifiesAhead;  ///

      remainingArguments.push(unifiesAhead);
    } else {
      terminalNodeUnifies = true;
    }

    return terminalNodeUnifies;
  }

  unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, ...remainingArguments) {
    let nonTerminalNodeUnifies;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        generalNodeQuery: nonTerminalNodeQuery,
        specificNodeQuery: nonTerminalNodeQuery,
        unify: (generalNode, specificNode, ...remainingArguments) => {
          let nonTerminalNodeUnifies;

          const generalNonTerminalNodeRuleName = generalNonTerminalNode.getRuleName(), ///
                specificNonTerminalNodeRuleName = specificNonTerminalNode.getRuleName(); ///

          if (generalNonTerminalNodeRuleName === specificNonTerminalNodeRuleName) {
            const generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(),
                  specificNonTerminalNodeChildNode = specificNonTerminalNode.getChildNodes(),
                  generalChildNodes = generalNonTerminalNodeChildNodes, ///
                  specificChildNodes = specificNonTerminalNodeChildNode, ///
                  childNodesUnifies = this.unifyChildNodes(generalChildNodes, specificChildNodes, ...remainingArguments);

            nonTerminalNodeUnifies = childNodesUnifies; ///
          }

          return nonTerminalNodeUnifies;
        }
      }
    ]

    let nodeUnifies = false;

    maps.some((map) => {
      const { generalNodeQuery, specificNodeQuery, unify } = map;

      const generalNode = generalNodeQuery(generalNonTerminalNode),  ///
            specificNode = specificNodeQuery(specificNonTerminalNode);  ///

      if ((generalNode !== null) && (specificNode !== null)) {
        nodeUnifies = unify(generalNode, specificNode, ...remainingArguments);

        return true;
      }
    });

    nonTerminalNodeUnifies = nodeUnifies; ///

    return nonTerminalNodeUnifies;
  }

  unifyChildNodesAhead(index, generalChildNodes, specificChildNodes, ...remainingArguments) {
    let childNodesUnifies;

    const unifyAhead = remainingArguments.pop(), ///
          generalChildNodesLength = generalChildNodes.length;

    if (index === generalChildNodesLength) {
      const unifiesAhead = unifyAhead();

      childNodesUnifies = unifiesAhead; ///
    } else {
      const generalChildNode = generalChildNodes[index],
            specificChildNode = specificChildNodes[index],
            generalNode = generalChildNode, ///
            specificNode = specificChildNode, ///
            nodeUnifies = this.unifyNode(generalNode, specificNode, ...remainingArguments, () => {
              remainingArguments.push(unifyAhead); ///

              const aheadIndex = index + 1,
                    childNodesUnifiesAhead = this.unifyChildNodesAhead(aheadIndex, generalChildNodes, specificChildNodes, ...remainingArguments);

              return childNodesUnifiesAhead;
            });

      childNodesUnifies = nodeUnifies;  ///
    }

    return childNodesUnifies;
  }
}
