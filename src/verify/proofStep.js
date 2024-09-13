"use strict";

import shim from "../shim";
import ProofStep from "../proofStep";
import verifySubproof from "../verify/subproof";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const subproofNodeQuery = nodeQuery("/proofStep|lastProofStep/subproof!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      qualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/unqualifiedStatement!");

export default function verifyProofStep(proofStepNode, substitutions, localContext) {
  let proofStepVerified = false;

  const subproofNode = subproofNodeQuery(proofStepNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode);

  let proofStep = null;

  if (subproofNode !== null) {
    let subproofVerified;

    subproofVerified = verifySubproof(subproofNode, substitutions, localContext);

    if (subproofVerified) {
      proofStep = ProofStep.fromSubproofNode(subproofNode);
    }
  } else {
    const derived = true,
          assignments = null;

    if (qualifiedStatementNode !== null) {
      const qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, derived, localContext);

      if (qualifiedStatementVerified) {
        const statementNode = statementNodeQuery(qualifiedStatementNode);

        proofStep = ProofStep.fromStatementNode(statementNode);
      }
    }

    if (unqualifiedStatementNode !== null) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode);

        proofStep = ProofStep.fromStatementNode(statementNode);
      }
    }
  }

  if (proofStep !== null) {
    localContext.addProofStep(proofStep);

    proofStepVerified = true;
  }

  return proofStepVerified;
}

Object.assign(shim, {
  verifyProofStep
});
