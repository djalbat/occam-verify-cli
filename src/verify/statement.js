"use strict";

import verifyTypeAssertion from "../verify/assertion/type";

const typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, qualified, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  if (!statementVerified) {
    const typeAssertionNode = typeAssertionNodeQuery(statementNode);

    if (typeAssertionNode !== null) {
      const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, qualified, proofContext);

      statementVerified = typeAssertionVerified; ///
    }
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
