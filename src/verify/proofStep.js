"use strict";

import shim from "../shim";
import ProofStep from "../proofStep";
import verifySubproof from "../verify/subproof";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignments } from "../utilities/assignments";

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
    if (qualifiedStatementNode !== null) {
      const derived = false,  ///
            assignments = [],
            qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, derived, localContext);

      if (qualifiedStatementVerified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        if (assignmentsAssigned) {
          const statementNode = statementNodeQuery(qualifiedStatementNode);

          proofStep = ProofStep.fromStatementNode(statementNode);
        }
      }
    }

    if (unqualifiedStatementNode !== null) {
      const derived = true,
            assignments = [],
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

      if (unqualifiedStatementVerified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        if (assignmentsAssigned) {
          const statementNode = statementNodeQuery(unqualifiedStatementNode);

          proofStep = ProofStep.fromStatementNode(statementNode);
        }
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
