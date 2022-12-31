"use strict";

import MetaAssertion from "../metaAssertion";
import verifyMetaDerivation from "../verify/metaDerivation";
import verifyQualifiedMetastatement from "./metastatement/qualified";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement!");

export default function verifyMetaproof(metaproofNode, conclusion, metaproofContext) {
  let metaproofVerified = false;

  metaproofContext.begin(metaproofNode);

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaproofNode);

  let metaDerivationVerified = false,
      qualifiedMetastatementVerified = false;

  if (metaDerivationNode !== null) {
    metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);
  }

  if (qualifiedMetastatementNode !== null) {
    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

    if (qualifiedMetastatementVerified) {
      const metaAssertion = MetaAssertion.fromQualifiedMetastatementNode(qualifiedMetastatementNode);

      metaproofContext.addMetaAssertion(metaAssertion);
    }
  }

  if (metaDerivationVerified || qualifiedMetastatementVerified) {
    const lastMetaAssertion = metaproofContext.getLastMetaAssertion(),
          metaAssertion = lastMetaAssertion, ///
          metastatementNode = conclusion.getMetastatementNode(),
          metaAssertionMetastatementNode = metaAssertion.getMetastatementNode(),
          metaAssertionMetastatementNodeMatches = matchMetaProofMetastatementNode(metaAssertionMetastatementNode, metastatementNode);

    metaproofVerified = metaAssertionMetastatementNodeMatches;  ///
  }

  metaproofVerified ?
    metaproofContext.complete(metaproofNode) :
      metaproofContext.complete(metaproofNode);

  return metaproofVerified;
}

function matchMetaProofMetastatementNode(metaAssertionMetastatementNode, metastatementNode) {
  const metaAssertionNonTerminalNode = metaAssertionMetastatementNode,  ///
        nonTerminalNode = metastatementNode,  ///
        metaAssertionNonTerminalNodeMatches = matchMetaProofNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode),
        metaAssertionMetastatementNodeMatches = metaAssertionNonTerminalNodeMatches;  ///

  return metaAssertionMetastatementNodeMatches;
}

function matchMetaProofNode(metaAssertionNode, node) {
  let metaAssertionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaAssertionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaAssertionTerminalNode = metaAssertionNode,  ///
            metaAssertionTerminalNodeMatches = matchMetaProofTerminalNode(metaAssertionTerminalNode, terminalNode);

      metaAssertionNodeMatches = metaAssertionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaAssertionNonTerminalNode = metaAssertionNode,  ///
            metaAssertionNonTerminalNodeMatches = matchMetaProofNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      metaAssertionNodeMatches = metaAssertionNonTerminalNodeMatches; ///
    }
  }

  return metaAssertionNodeMatches;
}

function matchMetaProofNodes(metaAssertionNodes, nodes) {
  let metaAssertionNodesMatches = false;

  const nodesLength = nodes.length,
        metaAssertionNodesLength = metaAssertionNodes.length;

  if (nodesLength === metaAssertionNodesLength) {
    metaAssertionNodesMatches = nodes.every((node, index) => {
      const metaAssertionNode = metaAssertionNodes[index],
            metaAssertionNodeMatches = matchMetaProofNode(metaAssertionNode, node);

      if (metaAssertionNodeMatches) {
        return true;
      }
    })
  }

  return metaAssertionNodesMatches;
}

function matchMetaProofTerminalNode(metaAssertionTerminalNode, terminalNode) {
  const matches = metaAssertionTerminalNode.match(terminalNode),
        metaAssertionTerminalNodeMatches = matches;  ///

  return metaAssertionTerminalNodeMatches;
}

function matchMetaProofNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode) {
  let metaAssertionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaAssertionRuleName = metaAssertionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaAssertionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaAssertionChildNodes = metaAssertionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaAssertionNodes = metaAssertionChildNodes, ///
          metaAssertionNodesMatches = matchMetaProofNodes(metaAssertionNodes, nodes);

    metaAssertionNonTerminalNodeMatches = metaAssertionNodesMatches; ///
  }

  return metaAssertionNonTerminalNodeMatches;
}
