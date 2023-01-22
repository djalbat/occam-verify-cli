"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, assertions, derived, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = proofContext.nodeAsString(statementNode);

    proofContext.debug(`Verifying the '${statementString}' qualified statement...`);

    let ruleMatchesStatement = true;

    const referenceNode = referenceNodeQuery(qualifiedStatementNode);

    if (referenceNode !== null) {
      const referenceName = referenceNameFromReferenceNode(referenceNode),
            rule = proofContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);
      }
    }

    if (ruleMatchesStatement) {
      const context = proofContext,
            statementVerified = verifyStatement(statementNode, assertions, derived, context);

      qualifiedStatementVerified = statementVerified; ///
    }
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
