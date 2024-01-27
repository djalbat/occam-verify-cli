"use strict";

import ProofStep from "../step/proof";
import Supposition from "../supposition";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

export default function verifySupposition(suppositionNode, suppositions, localContext) {
  let suppositionVerified = false;

  const suppositionString = localContext.nodeAsString(suppositionNode);

  localContext.trace(`Verifying the '${suppositionString}' supposition...`, suppositionNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

  if (unqualifiedStatementVerified) {
    const assignmentAssigned = assignAssignment(assignments, localContext);

    suppositionVerified = assignmentAssigned; ///
  }

  if (suppositionVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          supposition = Supposition.fromStatementNode(statementNode),
          proofStep = ProofStep.fromStatementNode(statementNode);

    suppositions.push(supposition);

    localContext.addProofStep(proofStep);

    localContext.debug(`...verified the '${suppositionString}' supposition.`, suppositionNode);
  }

  return suppositionVerified;
}
