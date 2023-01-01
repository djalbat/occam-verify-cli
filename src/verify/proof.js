"use strict";

import ProofContext from "../context/proof";
import verifyDerivation from "../verify/derivation";
import verifyQualifiedStatement from "../verify/statement/qualified";

import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/proof/qualifiedStatement!");

export default function verifyProof(proofNode, fileContext) {
  let proofVerified = false;

  const proofContext = ProofContext.fromFileContext(fileContext);

  proofContext.begin(proofNode);

  const derivationNode = derivationNodeQuery(proofNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(proofNode);

  let derivationVerified = false,
      qualifiedStatementVerified = false;

  if (derivationNode !== null) {
    derivationVerified = verifyDerivation(derivationNode, proofContext);
  }

  if (qualifiedStatementNode !== null) {
    let derived;

    derived = true;

    proofContext.setDerived(derived);

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

    derived = false;

    proofContext.setDerived(derived);
  }

  // if (derivationVerified) {
  //   const qualifiedStatementNode = qualifiedStatementNodeQuery(proofNode),
  //         qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);
  //
  //   if (qualifiedStatementVerified) {
  //     const statementNode = conclusion.getStatementNode(),
  //           proofStatementNode = proofStatementNodeQuery(proofNode),
  //           proofStatementNodeMatches = matchProofStatementNode(proofStatementNode, statementNode);
  //
  //     proofVerified = proofStatementNodeMatches;  ///
  //   }
  // }

  proofVerified ?
    proofContext.complete(proofNode) :
      proofContext.complete(proofNode);

  return proofVerified;
}

function matchProofStatementNode(proofStatementNode, statementNode) {
  const proofNonTerminalNode = proofStatementNode,  ///
        nonTerminalNode = statementNode,  ///
        proofNonTerminalNodeMatches = matchProofNonTerminalNode(proofNonTerminalNode, nonTerminalNode),
        proofStatementNodeMatches = proofNonTerminalNodeMatches;  ///

  return proofStatementNodeMatches;
}

function matchProofNode(proofNode, node) {
  let proofNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = proofNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            proofTerminalNode = proofNode,  ///
            proofTerminalNodeMatches = matchProofTerminalNode(proofTerminalNode, terminalNode);

      proofNodeMatches = proofTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            proofNonTerminalNode = proofNode,  ///
            proofNonTerminalNodeMatches = matchProofNonTerminalNode(proofNonTerminalNode, nonTerminalNode);

      proofNodeMatches = proofNonTerminalNodeMatches; ///
    }
  }

  return proofNodeMatches;
}

function matchProofNodes(proofNodes, nodes) {
  let proofNodesMatches = false;

  const nodesLength = nodes.length,
        proofNodesLength = proofNodes.length;

  if (nodesLength === proofNodesLength) {
    proofNodesMatches = nodes.every((node, index) => {
      const proofNode = proofNodes[index],
            proofNodeMatches = matchProofNode(proofNode, node);

      if (proofNodeMatches) {
        return true;
      }
    })
  }

  return proofNodesMatches;
}

function matchProofTerminalNode(proofTerminalNode, terminalNode) {
  const matches = proofTerminalNode.match(terminalNode),
        proofTerminalNodeMatches = matches;  ///

  return proofTerminalNodeMatches;
}

function matchProofNonTerminalNode(proofNonTerminalNode, nonTerminalNode) {
  let proofNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        proofRuleName = proofNonTerminalNode.getRuleName(); ///

  if (ruleName === proofRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          proofChildNodes = proofNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          proofNodes = proofChildNodes, ///
          proofNodesMatches = matchProofNodes(proofNodes, nodes);

    proofNonTerminalNodeMatches = proofNodesMatches; ///
  }

  return proofNonTerminalNodeMatches;
}
