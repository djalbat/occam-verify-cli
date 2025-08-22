"use strict";

import { nodeQuery } from "./utilities/query";
import { isLastRemainingArgumentFunction } from "./utilities/arguments";

const nonTerminalNodeQuery = nodeQuery("/*");

export default class Verifier {
  verify(node, ...remainingArguments) {
    let verifies;

    const nodeVerifies = this.verifyNode(node, ...remainingArguments);

    verifies = nodeVerifies;  ///

    return verifies;
  }

  verifyNode(node, ...remainingArguments) {
    let nodeVerifies;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeVerifies = this.verifyTerminalNode(terminalNode, ...remainingArguments);

      nodeVerifies = terminalNodeVerifies;  ///
    } else {
      const nonTerminalNode = node,  ///
            nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNode, ...remainingArguments);

      nodeVerifies = nonTerminalNodeVerifies; ///
    }

    return nodeVerifies;
  }

  verifyChildNodes(childNodes, ...remainingArguments) {
    let childNodesVerify;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const index = 0,
            childNodesVerifyAhead = this.verifyChildNodesAhead(index, childNodes, ...remainingArguments);

      childNodesVerify = childNodesVerifyAhead; ///
    } else {
      childNodesVerify = childNodes.every((childNode) => {
        const node = childNode, ///
              nodeVerifies = this.verifyNode(node, ...remainingArguments);

        if (nodeVerifies) {
          return true;
        }
      });
    }

    return childNodesVerify;
  }

  verifyTerminalNode(terminalNode, ...remainingArguments) {
    let terminalNodeVerifies;

    const lastRemainingArgumentFunction = isLastRemainingArgumentFunction(remainingArguments);

    if (lastRemainingArgumentFunction) {
      const verifyAhead = remainingArguments.pop(), ///
            verifiesAhead = verifyAhead();

      terminalNodeVerifies = verifiesAhead; ///

      remainingArguments.push(verifyAhead);
    } else {
      terminalNodeVerifies = true;
    }

    return terminalNodeVerifies;
  }

  verifyNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let nonTerminalNodeVerifies;

    let { maps } = this.constructor;

    maps = [ ///
      ...maps,
      {
        nodeQuery: nonTerminalNodeQuery,
        verify: (node, ...remainingArguments) => {
          let nonTerminalNodeVerifies;

          const childNodes = nonTerminalNode.getChildNodes(), ///
                childNodesVerify = this.verifyChildNodes(childNodes, ...remainingArguments);

          nonTerminalNodeVerifies = childNodesVerify; ///

          return nonTerminalNodeVerifies;
        }
      }
    ]

    let nodeVerifies = false;

    maps.some((map) => {
      const { nodeQuery, verify } = map;

      const node = nodeQuery(nonTerminalNode);

      if (node !== null) {
        nodeVerifies = verify(node, ...remainingArguments);

        return true;
      }
    });

    nonTerminalNodeVerifies = nodeVerifies; ///

    return nonTerminalNodeVerifies;
  }

  verifyChildNodesAhead(index, childNodes, ...remainingArguments) {
    let childNodesVerify;

    const verifyAhead = remainingArguments.pop(), ///
          childNodesLength = childNodes.length;

    if (index === childNodesLength) {
      const verifiesAhead = verifyAhead();

      childNodesVerify = verifiesAhead; ///
    } else {
      const childNode = childNodes[index],
            node = childNode, ///
            nodeVerifies = this.verifyNode(node, ...remainingArguments, () => {
              remainingArguments.push(verifyAhead);

              const aheadIndex = index + 1,
                    childNodesVerifyAhead = this.verifyChildNodesAhead(aheadIndex, childNodes, ...remainingArguments);

              return childNodesVerifyAhead;
            });

      childNodesVerify = nodeVerifies;  ///
    }

    return childNodesVerify;
  }
}
