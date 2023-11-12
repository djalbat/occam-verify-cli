"use strict";

export default class NodeVerifier {
  verifyNode(node, ...remainingArguments) {
    let nodeVerified;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeVerified = this.verifyTerminalNode(terminalNode);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node,  ///
            nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNode, ...remainingArguments);

      nodeVerified = nonTerminalNodeVerified; ///
    }

    return nodeVerified;
  }

  verifyChildNodes(childNodes, ...remainingArguments) {
    let childNodesVerify;

    childNodesVerify = childNodes.every((childNode) => {
      const node = childNode, ///
            nodeVerified = this.verifyNode(node, ...remainingArguments);

      if (nodeVerified) {
        return true;
      }
    });

    return childNodesVerify;
  }

  verifyTerminalNode(terminalNode, ...remainingArguments) {
    const terminalNodeVerified = true;  ///

    return terminalNodeVerified;
  }

  verifyNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let nonTerminalNodeVerified;

    const childNodes = nonTerminalNode.getChildNodes(), ///
          childNodesVerify = this.verifyChildNodes(childNodes, ...remainingArguments);

    nonTerminalNodeVerified = childNodesVerify; ///

    return nonTerminalNodeVerified;
  }
}
