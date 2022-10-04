"use strict";

function equateMetastatementNodes(metastatementNodes, ruleMetastatementNodes, context) {
  const metastatementNodesEqual = ruleMetastatementNodes.every((ruleMetastatementNode) => {
    const metastatementNodesEqual = metastatementNodes.some((metastatementNode) => {
      const metastatementNodeEqual = equateMetastatementNode(metastatementNode, ruleMetastatementNode, context);

      if (metastatementNodeEqual) {
        return true;
      }
    });

    if (metastatementNodesEqual) {
      return true;
    }
  });

  return metastatementNodesEqual;
}

module.exports = equateMetastatementNodes;

function equateMetastatementNode(metastatementNode, ruleMetastatementNode, context) {
  const nonTerminalNode = metastatementNode,  ///
        ruleNonTerminalNode = ruleMetastatementNode,  ///
        nonTerminalNodeEqual = equateNonTerminalNode(nonTerminalNode, ruleNonTerminalNode, context),
        metastatementNodeEqual = nonTerminalNodeEqual;  ///

  return metastatementNodeEqual;
}

function equateNonTerminalNode(nonTerminalNode, ruleNonTerminalNode, context) {
  let nonTerminalNodeEqual = false;

  const ruleName = nonTerminalNode.getRuleName(),
        ruleRuleName = ruleNonTerminalNode.getRuleName();

  if (ruleName === ruleRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          ruleChildNodes = ruleNonTerminalNode.getChildNodes(),
          childNodesEqual = equateChildNodes(childNodes, ruleChildNodes, context);

    nonTerminalNodeEqual = childNodesEqual; ///
  }

  return nonTerminalNodeEqual;
}

function equateTerminalNode(terminalNode, ruleTerminalNode, context) {
  let terminalNodeEqual = false;

  const matches = terminalNode.match(ruleTerminalNode);

  if (matches) {
    terminalNodeEqual = true;
  }

  return terminalNodeEqual;
}

function equateChildNodes(childNodes, ruleChildNodes, context) {
  let childNodesEqual = false;

  const childNodesLength = childNodes.length,
        ruleChildNodesLength = ruleChildNodes.length;

  if (childNodesLength === ruleChildNodesLength) {
    childNodesEqual = childNodes.every((childNode, index) => {
      const ruleChildNode = ruleChildNodes[index],
            node = childNode, ///
            ruleNode = ruleChildNode, ///
            nodeEqual = equateNode(node, ruleNode, context);

      if (nodeEqual) {
        return true;
      }
    })
  }

  return childNodesEqual;
}

function equateNode(node, ruleNode, context) {
  let nodeEqual;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = ruleNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = ruleNode,  ///
            terminalNodeEqual = equateTerminalNode(terminalNode, constructorTerminalNode, context);

      nodeEqual = terminalNodeEqual;  ///
    } else {
      const nonTerminalNode = node, ///
          constructorNonTerminalNode = ruleNode,  ///
          nonTerminalNodeEqual = equateNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context);

      nodeEqual = nonTerminalNodeEqual; ///
    }
  }

  return nodeEqual;
}
