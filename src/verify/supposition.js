"use strict";

import ProofStep from "../step/proof";
import Supposition from "../supposition";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

export default function verifySupposition(suppositionNode, suppositions, proofContext) {
  let suppositionVerified;

  const suppositionString = proofContext.nodeAsString(suppositionNode);

  proofContext.debug(`Verifying the '${suppositionString}' supposition...`, suppositionNode);

  const derived = false,
        assertions = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          proofStep = ProofStep.fromStatementNode(statementNode),
          supposition = Supposition.fromStatementNode(statementNode);

    suppositions.push(supposition);

    proofContext.addProofStep(proofStep);

    assertions.every((assertion) => {
      assertion.assert(proofContext);
    });

    suppositionVerified = true;
  }

  return suppositionVerified;
}
