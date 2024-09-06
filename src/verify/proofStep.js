"use strict";

import shim from "../shim";
import ProofStep from "../proofStep";
import verifySubproof from "../verify/subproof";
import verifyQualifiedStatement from "../verify/statement/qualified";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const subproofNodeQuery = nodeQuery("/proofStep|lastProofStep/subproof!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement|unqualifiedStatement/statement!"),
      qualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/proofStep|lastProofStep/unqualifiedStatement!");

export default function verifyProofStep(proofStepNode, substitutions, localContext) {
  let proofStepVerified = false;

  const subproofNode = subproofNodeQuery(proofStepNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(proofStepNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(proofStepNode);

  if (false) {
    ///
  } else if (subproofNode !== null) {
    let subproofVerified;

    subproofVerified = verifySubproof(subproofNode, substitutions, localContext);

    if (subproofVerified) {
      const proofStep = ProofStep.fromSubproofNode(subproofNode);

      localContext.addProofStep(proofStep);

      proofStepVerified = true;
    }
  } else if (qualifiedStatementNode !== null) {
    let qualifiedStatementVerified;

    const assignments = [];

    qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, substitutions, assignments, localContext);

    if (qualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      qualifiedStatementVerified = assignmentAssigned; ///
    }

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            proofStep = ProofStep.fromStatementNode(statementNode);

      localContext.addProofStep(proofStep);

      proofStepVerified = true;
    }
  } else if (unqualifiedStatementNode !== null) {
    let unqualifiedStatementVerified;

    const derived = true,
          assignments = [];

    unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const assignmentAssigned = assignAssignment(assignments, localContext);

      unqualifiedStatementVerified = assignmentAssigned;  ///
    }

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            proofStep = ProofStep.fromStatementNode(statementNode);

      localContext.addProofStep(proofStep);

      proofStepVerified = true;
    }
  }

  return proofStepVerified;
}

Object.assign(shim, {
  verifyProofStep
});
