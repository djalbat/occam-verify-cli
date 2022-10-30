"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, context = this) {
  let qualifiedStatementVerified;

  context.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, context);

  qualifiedStatementVerified = statementVerified; ///

  qualifiedStatementVerified ?
    context.complete(qualifiedStatementNode) :
      context.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
