"use strict";

import verifyStatement from "../../verify/statement";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!");

export default function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const qualifiedStatementString = nodeAsString(qualifiedStatementNode);

  proofContext.debug(`Verifying the '${qualifiedStatementString}' qualified statement...`);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const referenceNode = referenceNodeQuery(qualifiedStatementNode);

    if (referenceNode === null) {
      const statementVerified = verifyStatement(statementNode, proofContext);

      qualifiedStatementVerified = statementVerified; ///
    } else {
      const referenceName = referenceNameFromReferenceNode(referenceNode);

      debugger
    }
  }

  if (qualifiedStatementVerified) {
    proofContext.info(`Verified the '${qualifiedStatementString}' qualified statement.`);
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
