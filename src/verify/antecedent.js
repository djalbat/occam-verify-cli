"use strict";

import ProofStep from "../step/proof";
import Antecedent from "../antecedent";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      unqualifiedStatementNodeQuery = nodeQuery("/antecedent/unqualifiedStatement");

export default function verifyAntecedent(antecedentNode, antecedents, proofContext) {
  let antecedentOrAntecedentsVerified;

  proofContext.begin(antecedentNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(antecedentNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          proofStep = ProofStep.fromStatementNode(statementNode),
          antecedent = Antecedent.fromStatementNode(statementNode);

    antecedents.push(antecedent);

    proofContext.addProofStep(proofStep);

    antecedentOrAntecedentsVerified = true;
  }

  antecedentOrAntecedentsVerified ?
    proofContext.complete(antecedentNode) :
      proofContext.halt(antecedentNode);

  return antecedentOrAntecedentsVerified;
}
