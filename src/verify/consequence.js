"use strict";

import Consequence from "../consequence";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequence/unqualifiedStatement!");

export default function verifyConsequence(consequenceNode, consequences, proofContext) {
  let consequenceVerified = false;

  const consequenceString = proofContext.nodeAsString(consequenceNode);

  proofContext.debug(`Verifying the '${consequenceString}' consequence...`, consequenceNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequenceNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          consequence = Consequence.fromStatementNode(statementNode);

    consequences.push(consequence);

    consequenceVerified = true;
  }

  if (consequenceVerified) {
    proofContext.info(`Verified the '${consequenceString}' consequence.`, consequenceNode);
  }

  return consequenceVerified;
}
