"use strict";

import verifyStatementAsEquality from "../verify/statementAsEquality";
import verifyStatementTypeAssertion from "../verify/statementTypeAssertion";

export default function verifyStatement(statementNode, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  if (!statementVerified) {
    const equalityVerifiedAsEquality = verifyStatementAsEquality(statementNode, proofContext);

    statementVerified = equalityVerifiedAsEquality; ///
  }

  if (!statementVerified) {
    const statementTypeAssertionVerified = verifyStatementTypeAssertion(statementNode, proofContext);

    statementVerified = statementTypeAssertionVerified; ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
