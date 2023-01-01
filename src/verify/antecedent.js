"use strict";

import Assertion from "../assertion";
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
          assertion = Assertion.fromUnqualifiedStatementNode(unqualifiedStatementNode),
          antecedent = Antecedent.fromStatementNode(statementNode);

    antecedents.push(antecedent);

    proofContext.addAssertion(assertion);

    antecedentOrAntecedentsVerified = true;
  }

  antecedentOrAntecedentsVerified ?
    proofContext.complete(antecedentNode) :
      proofContext.halt(antecedentNode);

  return antecedentOrAntecedentsVerified;
}
