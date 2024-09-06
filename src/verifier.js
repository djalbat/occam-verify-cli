"use strict";

export default class Verifier {
  verify(node, ...remainingArguments) {
    let verified;

    const nodeVerified = this.verifyNode(node, ...remainingArguments);

    verified = nodeVerified;  ///

    return verified;
  }

  verifyNode(node, ...remainingArguments) {
    let nodeVerified;

    const nodeTerminalNode = node.isTerminalNode();

    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            terminalNodeVerified = this.verifyTerminalNode(terminalNode, ...remainingArguments);

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

  verifyTerminalNode(terminalNode, ...remainingArguments) {
    let terminalNodeVerified;

    const verifyAhead = remainingArguments.pop(), ///
          verifiedAhead = verifyAhead();  ///

    terminalNodeVerified = verifiedAhead; ///

    return terminalNodeVerified;
  }

  verifyNonTerminalNode(nonTerminalNode, ...remainingArguments) {
    let nonTerminalNodeVerified;

    const childNodes = nonTerminalNode.getChildNodes(), ///
          childNodesVerify = this.verifyChildNodes(childNodes, ...remainingArguments);

    nonTerminalNodeVerified = childNodesVerify; ///

    return nonTerminalNodeVerified;
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
              remainingArguments.push(verifyAhead);

              const aheadIndex = index + 1,
                    childNodesVerifyAhead = this.verifyChildNodesAhead(aheadIndex, childNodes, ...remainingArguments);

              return childNodesVerifyAhead;
            });

      childNodesVerify = nodeVerified;  ///
    }

    return childNodesVerify;
  }
}

export function verify(nodeQueryMaps, nonTerminalNode, ...remainingArguments) {
  let nodeVerified = false;

  nodeVerified = nodeQueryMaps.some((nodeQueryMap) => {
    const { nodeQuery, verify } = nodeQueryMap;

    const node = nodeQuery(nonTerminalNode);

    if (node !== null) {
      nodeVerified = verify(node, ...remainingArguments);

      return true;
    }
  });

  return nodeVerified;
}
