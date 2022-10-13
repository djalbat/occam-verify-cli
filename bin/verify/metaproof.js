"use strict";

const verifyMetaDerivation = require("../verify/metaDerivation"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified");

const { nodeQuery } = require("../utilities/query");

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement!"),
      metaProofMetastatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement/metastatement!");

function verifyMetaproof(metaproofNode, metastatementNode, context) {
  let metaproofVerified = false;

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode);

  let metaDerivationVerified = true;

  if (metaDerivationNode !== null) {
    metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, context);
  }

  if (metaDerivationVerified) {
    const qualifiedMetastatementNode = qualifiedStatementNodeQuery(metaproofNode),
          qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

    if (qualifiedMetastatementVerified) {
      const metaProofMetastatementNode = metaProofMetastatementNodeQuery(metaproofNode),
            metaProofMetastatementNodeMatches = matchMetaProofMetastatementNode(metaProofMetastatementNode, metastatementNode);

      metaproofVerified = metaProofMetastatementNodeMatches;  ///
    }
  }

  return metaproofVerified;
}

module.exports = verifyMetaproof;

function matchMetaProofMetastatementNode(metaProofMetastatementNode, metastatementNode) {
  const metaProofNonTerminalNode = metaProofMetastatementNode,  ///
        nonTerminalNode = metastatementNode,  ///
        metaProofNonTerminalNodeMatches = matchMetaProofNonTerminalNode(metaProofNonTerminalNode, nonTerminalNode),
        metaProofMetastatementNodeMatches = metaProofNonTerminalNodeMatches;  ///

  return metaProofMetastatementNodeMatches;
}

function matchMetaProofNode(metaProofNode, node) {
  let metaProofNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaProofNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaProofTerminalNode = metaProofNode,  ///
            metaProofTerminalNodeMatches = matchMetaProofTerminalNode(metaProofTerminalNode, terminalNode);

      metaProofNodeMatches = metaProofTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaProofNonTerminalNode = metaProofNode,  ///
            metaProofNonTerminalNodeMatches = matchMetaProofNonTerminalNode(metaProofNonTerminalNode, nonTerminalNode);

      metaProofNodeMatches = metaProofNonTerminalNodeMatches; ///
    }
  }

  return metaProofNodeMatches;
}

function matchMetaProofNodes(metaProofNodes, nodes) {
  let metaProofNodesMatches = false;

  const nodesLength = nodes.length,
        metaProofNodesLength = metaProofNodes.length;

  if (nodesLength === metaProofNodesLength) {
    metaProofNodesMatches = nodes.every((node, index) => {
      const metaProofNode = metaProofNodes[index],
            metaProofNodeMatches = matchMetaProofNode(metaProofNode, node);

      if (metaProofNodeMatches) {
        return true;
      }
    })
  }

  return metaProofNodesMatches;
}

function matchMetaProofTerminalNode(metaProofTerminalNode, terminalNode) {
  const matches = metaProofTerminalNode.match(terminalNode),
        metaProofTerminalNodeMatches = matches;  ///

  return metaProofTerminalNodeMatches;
}

function matchMetaProofNonTerminalNode(metaProofNonTerminalNode, nonTerminalNode) {
  let metaProofNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaProofRuleName = metaProofNonTerminalNode.getRuleName(); ///

  if (ruleName === metaProofRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaProofChildNodes = metaProofNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaProofNodes = metaProofChildNodes, ///
          metaProofNodesMatches = matchMetaProofNodes(metaProofNodes, nodes);

    metaProofNonTerminalNodeMatches = metaProofNodesMatches; ///
  }

  return metaProofNonTerminalNodeMatches;
}
