"use strict";

import ProofStep from "../step/proof";
import Supposition from "../supposition";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

export default function verifySupposition(suppositionNode, suppositions, proofContext) {
  let suppositionVerified;

  proofContext.begin(suppositionNode);

  const suppositionString = nodeAsString(suppositionNode);

  proofContext.debug(`Verifying the ${suppositionString} supposition...`);

  const derived = false,
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, derived, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          proofStep = ProofStep.fromStatementNode(statementNode),
          supposition = Supposition.fromStatementNode(statementNode);

    suppositions.push(supposition);

    proofContext.addProofStep(proofStep);

    suppositionVerified = true;
  }

  suppositionVerified ?
    proofContext.complete(suppositionNode) :
      proofContext.halt(suppositionNode);

  return suppositionVerified;
}
