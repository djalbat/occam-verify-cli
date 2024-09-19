"use strict";

import Premise from "../premise";
import ProofStep from "../proofStep";
import verifyStatement from "../verify/statement";

import { nodeQuery } from "../utilities/query";
import { assignAssignments } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement!");

export default function verifyPremise(premiseNode, premises, localContext) {
  let premiseVerified;

  const premiseString = localContext.nodeAsString(premiseNode);

  localContext.trace(`Verifying the '${premiseString}' premise...`, premiseNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode);

  if (unqualifiedStatementNode !== null) {
    const stated = true,
          assignments = [],
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      if (assignmentsAssigned) {
        const premise = Premise.fromStatementNode(statementNode),
              proofStep = ProofStep.fromStatementNode(statementNode);

        premises.push(premise);

        localContext.addProofStep(proofStep);

        premiseVerified = true;
      }
    }
  }

  if (premiseVerified) {
    localContext.debug(`...verified the '${premiseString}' premise.`, premiseNode);
  }

  return premiseVerified;
}
