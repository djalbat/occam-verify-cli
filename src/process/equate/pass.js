"use strict";

import { nodeQuery } from "../../utilities/query";
import { terminalNodeMapFromNodes, areTerminalNodeMapsEqual } from "../../utilities/unifier";

const nonTerminalNodeQuery = nodeQuery("/*");

export default class Pass {
  run(leftNode, rightNode, ...remainingArguments) {
    let success;

    const visited = this.visitNode(leftNode, rightNode, ...remainingArguments);

    success = visited;  ///

    return success;
  }

  descend(leftChildNodes, rightChildNodes, ...remainingArguments) {
    let descended = false;

    const leftChildNodesLength = leftChildNodes.length,
          rightChildNodesLength = rightChildNodes.length;

    if (leftChildNodesLength === rightChildNodesLength) {
      const leftTerminalNodeMap = terminalNodeMapFromNodes(leftChildNodes),
            rightTerminalNodeMap = terminalNodeMapFromNodes(rightChildNodes),
            terminalNodeMapsEqual = areTerminalNodeMapsEqual(leftTerminalNodeMap, rightTerminalNodeMap);

      if (terminalNodeMapsEqual) {
        descended = leftChildNodes.every((leftChildNode, index) => {
          const rightChildNode = rightChildNodes[index],
                leftNode = leftChildNode, ///
                rightNode = rightChildNode, ///
                nodeVisited = this.visitNode(leftNode, rightNode, ...remainingArguments);

          if (nodeVisited) {
            return true;
          }
        });
      }
    }

    return descended;
  }

  visitNode(leftNode, rightNode, ...remainingArguments) {
    let visited = false;

    const leftNodeTerminalNode = leftNode.isTerminalNode(),
          rightNodeTerminalNode = rightNode.isTerminalNode(),
          leftNodeNonTerminalNode = leftNode.isNonTerminalNode(),
          rightNodeNonTerminalNode = rightNode.isNonTerminalNode();

    if (false) {
      ///
    } else if (leftNodeTerminalNode && rightNodeTerminalNode) {
      const leftTerminalNode = leftNode,  ///
            rightTerminalNode = rightNode;  ///

      visited = this.visitTerminalNode(leftTerminalNode, rightTerminalNode, ...remainingArguments);
    } else if (leftNodeNonTerminalNode && rightNodeNonTerminalNode) {
      const leftNonTerminalNode = leftNode,  ///
            rightNonTerminalNode = rightNode; ///

      visited = this.visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, ...remainingArguments);
    }

    return visited;
  }

  visitTerminalNode(leftTerminalNode, rightTerminalNode, ...remainingArguments) { ///
    let visited;

    visited = true;

    return visited;
  }

  visitNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, ...remainingArguments) {
    let visited = false;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        leftNodeQuery: nonTerminalNodeQuery,
        rightNodeQuery: nonTerminalNodeQuery,
        run: (leftNode, rightNode, ...remainingArguments) => {
          let visited;

          const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), ///
                rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(); ///

          if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
            const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
                  rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
                  leftChildNodes = leftNonTerminalNodeChildNodes, ///
                  rightChildNodes = rightNonTerminalNodeChildNodes, ///
                  descended = this.descend(leftChildNodes, rightChildNodes, ...remainingArguments);

            visited = descended; ///
          }

          return visited;
        }
      }
    ]

    maps.some((map) => {
      const { leftNodeQuery, rightNodeQuery, run } = map;

      const leftNode = leftNodeQuery(leftNonTerminalNode),  ///
            rightNode = rightNodeQuery(rightNonTerminalNode);  ///

      if ((leftNode !== null) && (rightNode !== null)) {
        const success = run(leftNode, rightNode, ...remainingArguments);

        visited = success;  ///

        return true;
      }
    });

    return visited;
  }
}
