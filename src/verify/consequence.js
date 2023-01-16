"use strict";

import Consequence from "../consequence";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequence/unqualifiedStatement!");

export default function verifyConsequence(consequenceNode, consequences, proofContext) {
  let consequenceVerified = false;

  proofContext.begin(consequenceNode);

  const consequenceString = nodeAsString(consequenceNode);

  proofContext.debug(`Verifying the ${consequenceString} consequence...`);

  const derived = false,
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequenceNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, derived, proofContext);

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
