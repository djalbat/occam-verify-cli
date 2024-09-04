"use strict";

import Premise from "../premise";
import ProofStep from "../proofStep";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { assignAssignment } from "../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/premise/unqualifiedStatement!");

export default function verifyPremise(premiseNode, premises, localContext) {
  let premiseVerified;

  const premiseString = localContext.nodeAsString(premiseNode);

  localContext.trace(`Verifying the '${premiseString}' premise...`, premiseNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(premiseNode),
        derived = false,
        assignments = [],
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

  if (unqualifiedStatementVerified) {
    const assignmentAssigned = assignAssignment(assignments, localContext);

    if (assignmentAssigned) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            metaproofStep = ProofStep.fromStatementNode(statementNode),
            premise = Premise.fromStatementNode(statementNode);

      premises.push(premise);

      localContext.addProofStep(metaproofStep);

      premiseVerified = true;
    }
  }

  if (premiseVerified) {
    localContext.debug(`...verified the '${premiseString}' premise.`, premiseNode);
  }

  return premiseVerified;
}
