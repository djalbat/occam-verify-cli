"use strict";

import Assertion from "../assertion";
import Antecedent from "../antecedent";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery, nodesQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      unqualifiedStatementNodesQuery = nodesQuery("/antecedent|antecedents/unqualifiedStatement");

export default function verifyAntecedentOrAntecedents(antecedentOrAntecedentsNode, antecedents, proofContext) {
  let antecedentOrAntecedentsVerified;

  proofContext.begin(antecedentOrAntecedentsNode);

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(antecedentOrAntecedentsNode);

  antecedentOrAntecedentsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            assertion = Assertion.fromUnqualifiedStatementNode(unqualifiedStatementNode),
            antecedent = Antecedent.fromStatementNode(statementNode);

      antecedents.push(antecedent);

      proofContext.addAssertion(assertion);

      return true;
    }
  });

  antecedentOrAntecedentsVerified ?
    proofContext.complete(antecedentOrAntecedentsNode) :
      proofContext.halt(antecedentOrAntecedentsNode);

  return antecedentOrAntecedentsVerified;
}
