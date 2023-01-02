"use strict";

import ProofStep from "../step/proof";
import verifyDerivation from "../verify/derivation";
import verifyQualifiedStatement from "./statement/qualified";

import { matchNode } from "../utilities/node";
import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      derivationNodeQuery = nodeQuery("/proof/derivation!"),
      qualifiedStatementNodeQuery = nodeQuery("/proof/qualifiedStatement!");

export default function verifyProof(proofNode, conclusion, proofContext) {
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
    let derived;

    derived = true;

    proofContext.setDerived(derived);

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

    derived = false;

    proofContext.setDerived(derived);

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            proofStep = ProofStep.fromStatementNode(statementNode);

      proofContext.addProofStep(proofStep);
    }
  }

  if (derivationVerified || qualifiedStatementVerified) {
    const lastProofStep = proofContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          lastStatementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          lastStatementMatches = matchLastStatementNode(lastStatementNode, conclusionStatementNode);

    proofVerified = lastStatementMatches;  ///
  }

  proofVerified ?
    proofContext.complete(proofNode) :
      proofContext.complete(proofNode);

  return proofVerified;
}

function matchLastStatementNode(lastStatementNode, conclusionStatementNode) {
  const nodeA = lastStatementNode,  ///
        nodeB = conclusionStatementNode,  ///
        nonTerminalNodeMatches = matchNode(nodeA, nodeB),
        lastStatementMatches = nonTerminalNodeMatches;  ///

  return lastStatementMatches;
}
