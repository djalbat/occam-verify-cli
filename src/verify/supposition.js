"use strict";

import ProofStep from "../proofStep";
import Supposition from "../supposition";
// import verifyStatement from "../verify/statement";

import { nodeQuery } from "../utilities/query";
import { assignAssignments } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

export default function verifySupposition(suppositionNode, suppositions, localContext) {
  let suppositionVerified = false;

  const suppositionString = localContext.nodeAsString(suppositionNode);

  localContext.trace(`Verifying the '${suppositionString}' supposition...`, suppositionNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode);

  if (unqualifiedStatementNode !== null) {
    const stated = true,
          assignments = [],
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      if (assignmentsAssigned) {
        const supposition = Supposition.fromStatementNode(statementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        suppositions.push(supposition);

        localContext.addProofStep(proofStep);

        suppositionVerified = true;
      }
    }
  }

  if (suppositionVerified) {
    localContext.debug(`...verified the '${suppositionString}' supposition.`, suppositionNode);
  }

  return suppositionVerified;
}
