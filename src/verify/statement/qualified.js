"use strict";

import verifyStatement from "../../verify/statement";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!"),
      statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verifying the ${statementString} qualified statement...`);

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
      const assertions = [],
            statementVerified = verifyStatement(statementNode, assertions, proofContext);

      qualifiedStatementVerified = statementVerified; ///
    }
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
