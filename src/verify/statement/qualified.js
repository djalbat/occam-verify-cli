"use strict";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const qualifiedStatementString = nodeAsString(qualifiedStatementNode);

  proofContext.debug(`Verifying the '${qualifiedStatementString}' qualified statement...`);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

    if (statementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedStatementNode),
          referenceName = referenceNameFromReferenceNode(referenceNode);

    ///
  }

  if (qualifiedStatementVerified) {
    proofContext.info(`Verified the '${qualifiedStatementString}' qualified statement.`);
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
