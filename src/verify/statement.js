"use strict";

import verifyStatementAsEquality from "../verify/statementAsEquality";
import verifyStatementTypeAssertion from "../verify/statementTypeAssertion";

import { nodeAsString } from "../utilities/string";

export default function verifyStatement(statementNode, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  const statementString = nodeAsString(statementNode);

  proofContext.debug(`Verifying the '${statementString}' statement...`);

  if (!statementVerified) {
    const equalityVerifiedAsEquality = verifyStatementAsEquality(statementNode, proofContext);

    statementVerified = equalityVerifiedAsEquality; ///
  }

  if (!statementVerified) {
    const statementTypeAssertionVerified = verifyStatementTypeAssertion(statementNode, proofContext);

    statementVerified = statementTypeAssertionVerified; ///
  }

  if (!statementVerified) {
    statementVerified = true; ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
