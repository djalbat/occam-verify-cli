"use strict";

import Assertion from "../assertion";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

export default function verifySupposition(suppositionNode, suppositions, context) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context),
        suppositionVerified = unqualifiedStatementVerified;

  if (suppositionVerified) {
    const supposition = Assertion.fromUnqualifiedStatementNode(unqualifiedStatementNode);

    suppositions.push(supposition);
  }

  return suppositionVerified;
}
