"use strict";

import ProofStep from "../step/proof";
import Antecedent from "../antecedent";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/antecedent/unqualifiedStatement!/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/");

export default function verifyAntecedent(antecedentNode, antecedents, proofContext) {
  let antecedentVerified;

  proofContext.begin(antecedentNode);

  const antecedentString = nodeAsString(antecedentNode);

  proofContext.debug(`Verifying the ${antecedentString} antecedent...`);

  const statementNode = statementNodeQuery(antecedentNode);

  if (statementNode !== null) {
    const proofStep = ProofStep.fromStatementNode(statementNode),
          antecedent = Antecedent.fromStatementNode(statementNode);

    antecedents.push(antecedent);

    proofContext.addProofStep(proofStep);

    antecedentVerified = true;
  }

  antecedentVerified ?
    proofContext.complete(antecedentNode) :
      proofContext.halt(antecedentNode);

  return antecedentVerified;
}
