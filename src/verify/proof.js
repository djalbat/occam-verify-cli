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
    proofContext.setDerived();

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, proofContext);

    proofContext.resetDerived();

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            proofStep = ProofStep.fromStatementNode(statementNode);

      proofContext.addProofStep(proofStep);
    }
  }

  if (derivationVerified || qualifiedStatementVerified) {
    const lastProofStep = proofContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          statementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          nodeA = statementNode,  ///
          nodeB = conclusionStatementNode,  ///
          nodeMatches = matchNode(nodeA, nodeB);

    proofVerified = nodeMatches;  ///
  }

  proofVerified ?
    proofContext.complete(proofNode) :
      proofContext.complete(proofNode);

  return proofVerified;
}
