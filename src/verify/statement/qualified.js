"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
  let qualifiedStatementVerified;

  proofContext.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, proofContext);

  qualifiedStatementVerified = statementVerified; ///

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
