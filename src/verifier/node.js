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

    const index = 0,
          childNodesVerifyAhead = this.verifyChildNodesAhead(index, childNodes, ...remainingArguments);

    childNodesVerify = childNodesVerifyAhead; ///

    return childNodesVerify;
  }

  verifyChildNodesAhead(index, childNodes, ...remainingArguments) {
    let childNodesVerify;

    const verifyAhead = remainingArguments.pop(), ///
          childNodesLength = childNodes.length;

    if (index === childNodesLength) {
      const verifiedAhead = verifyAhead();

      childNodesVerify = verifiedAhead; ///
    } else {
      const childNode = childNodes[index],
            node = childNode, ///
            nodeVerified = this.verifyNode(node, ...remainingArguments, () => {
              index++;

              const childNodesVerifyAhead = this.verifyChildNodesAhead(index, childNodes, ...remainingArguments);

              return childNodesVerifyAhead;
            });

      childNodesVerify = nodeVerified;  ///
    }

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
