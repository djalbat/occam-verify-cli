"use strict";

import verifyStatementAsEquality from "../verify/statementAsEquality";
import verifyStatementTypeAssertion from "../verify/statementTypeAssertion";

export default function verifyStatement(statementNode, qualified, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  if (!statementVerified) {
    const equalityVerifiedAsEquality = verifyStatementAsEquality(statementNode, qualified, proofContext);

    statementVerified = equalityVerifiedAsEquality; ///
  }

  if (!statementVerified) {
    const statementTypeAssertionVerified = verifyStatementTypeAssertion(statementNode, qualified, proofContext);

    statementVerified = statementTypeAssertionVerified; ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
