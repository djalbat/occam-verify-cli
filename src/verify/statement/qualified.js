"use strict";

import verifyStatement from "../../verify/statement";

import { nodeAsString } from "../../utilities/string";
import { nodeQuery, referenceNameFromReferenceNode } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!"),
      referenceNodeQuery = nodeQuery("/qualifiedStatement/qualification!/reference!");

export default function verifyQualifiedStatement(qualifiedStatementNode, proofContext) {
  let qualifiedStatementVerified = false;

  proofContext.begin(qualifiedStatementNode);

  const statementNode = statementNodeQuery(qualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verifying the ${statementString} qualified statement...`);

    const referenceNode = referenceNodeQuery(qualifiedStatementNode);

    if (referenceNode === null) {
      const qualified = true,
            statementVerified = verifyStatement(statementNode, qualified, proofContext);

      qualifiedStatementVerified = statementVerified; ///
    } else {
      const referenceName = referenceNameFromReferenceNode(referenceNode),
            rule = proofContext.findRuleByReferenceName(referenceName);

      if (rule !== null) {
        const ruleMatchesStatement = rule.matchStatement(statementNode, proofContext);

        qualifiedStatementVerified = ruleMatchesStatement;  ///
      }
    }
  }

  qualifiedStatementVerified ?
    proofContext.complete(qualifiedStatementNode) :
      proofContext.halt(qualifiedStatementNode);

  return qualifiedStatementVerified;
}
