"use strict";

import Consequence from "../consequence";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequence/unqualifiedStatement!");

export default function verifyConsequence(consequenceNode, consequences, proofContext) {
  let consequenceVerified = false;

  proofContext.begin(consequenceNode);

  const consequenceString = proofContext.nodeAsString(consequenceNode);

  proofContext.debug(`Verifying the '${consequenceString}' consequence...`);

  const derived = false,
        assertions = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequenceNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          consequence = Consequence.fromStatementNode(statementNode);

    consequences.push(consequence);

    consequenceVerified = true;
  }

  consequenceVerified ?
    proofContext.complete(consequenceNode) :
      proofContext.halt(consequenceNode);

  return consequenceVerified;
}
