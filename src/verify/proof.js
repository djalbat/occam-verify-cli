"use strict";

import Assertion from "../assertion";
import verifyDerivation from "../verify/derivation";
import verifyQualifiedStatement from "./statement/qualified";

import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/proof/qualifiedStatement!");

export default function verifyProof(proofNode, consequent, proofContext) {
  let proofVerified = false;

  proofContext.begin(proofNode);

  const derivationNode = derivationNodeQuery(proofNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(proofNode);

  let derivationVerified = false,
      qualifiedStatementVerified = false;

  if (derivationNode !== null) {
    derivationVerified = verifyDerivation(derivationNode, proofContext);
  }

  if (qualifiedStatementNode !== null) {
    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

    if (qualifiedStatementVerified) {
      const assertion = Assertion.fromQualifiedStatementNode(qualifiedStatementNode);

      proofContext.addAssertion(assertion);
    }
  }

  if (derivationVerified || qualifiedStatementVerified) {
    const lastAssertion = proofContext.getLastAssertion(),
          assertion = lastAssertion, ///
          statementNode = consequent.getStatementNode(),
          assertionStatementNode = assertion.getStatementNode(),
          assertionStatementNodeMatches = matchProofStatementNode(assertionStatementNode, statementNode);

    proofVerified = assertionStatementNodeMatches;  ///
  }

  proofVerified ?
    proofContext.complete(proofNode) :
      proofContext.complete(proofNode);

  return proofVerified;
}

function matchProofStatementNode(assertionStatementNode, statementNode) {
  const assertionNonTerminalNode = assertionStatementNode,  ///
        nonTerminalNode = statementNode,  ///
        assertionNonTerminalNodeMatches = matchProofNonTerminalNode(assertionNonTerminalNode, nonTerminalNode),
        assertionStatementNodeMatches = assertionNonTerminalNodeMatches;  ///

  return assertionStatementNodeMatches;
}

function matchProofNode(assertionNode, node) {
  let assertionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = assertionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            assertionTerminalNode = assertionNode,  ///
            assertionTerminalNodeMatches = matchProofTerminalNode(assertionTerminalNode, terminalNode);

      assertionNodeMatches = assertionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            assertionNonTerminalNode = assertionNode,  ///
            assertionNonTerminalNodeMatches = matchProofNonTerminalNode(assertionNonTerminalNode, nonTerminalNode);

      assertionNodeMatches = assertionNonTerminalNodeMatches; ///
    }
  }

  return assertionNodeMatches;
}

function matchProofNodes(assertionNodes, nodes) {
  let assertionNodesMatches = false;

  const nodesLength = nodes.length,
        assertionNodesLength = assertionNodes.length;

  if (nodesLength === assertionNodesLength) {
    assertionNodesMatches = nodes.every((node, index) => {
      const assertionNode = assertionNodes[index],
            assertionNodeMatches = matchProofNode(assertionNode, node);

      if (assertionNodeMatches) {
        return true;
      }
    })
  }

  return assertionNodesMatches;
}

function matchProofTerminalNode(assertionTerminalNode, terminalNode) {
  const matches = assertionTerminalNode.match(terminalNode),
        assertionTerminalNodeMatches = matches;  ///

  return assertionTerminalNodeMatches;
}

function matchProofNonTerminalNode(assertionNonTerminalNode, nonTerminalNode) {
  let assertionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        assertionRuleName = assertionNonTerminalNode.getRuleName(); ///

  if (ruleName === assertionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          assertionChildNodes = assertionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          assertionNodes = assertionChildNodes, ///
          assertionNodesMatches = matchProofNodes(assertionNodes, nodes);

    assertionNonTerminalNodeMatches = assertionNodesMatches; ///
  }

  return assertionNonTerminalNodeMatches;
}
