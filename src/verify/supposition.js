"use strict";

import ProofStep from "../step/proof";
import Supposition from "../supposition";
import verifyStatement from "./statement";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!/statement!");

export default function verifySupposition(suppositionNode, suppositions, proofContext) {
  let suppositionVerified;

  proofContext.begin(suppositionNode);

  const suppositionString = nodeAsString(suppositionNode);

  proofContext.debug(`Verifying the ${suppositionString} supposition...`);

  const statementNode = statementNodeQuery(suppositionNode);

  if (statementNode !== null) {
    const qualified = false,
          statementVerified = verifyStatement(statementNode, qualified, proofContext);

    if (statementVerified) {
      const proofStep = ProofStep.fromStatementNode(statementNode),
            supposition = Supposition.fromStatementNode(statementNode);

      suppositions.push(supposition);

      proofContext.addProofStep(proofStep);
    }

    suppositionVerified = true;
  }

  suppositionVerified ?
    proofContext.complete(suppositionNode) :
      proofContext.halt(suppositionNode);

  return suppositionVerified;
}
