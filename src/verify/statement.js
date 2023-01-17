"use strict";

import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";

const typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, assertions, proofContext) {
  let statementVerified = true; ///

  proofContext.begin(statementNode);

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assertions, proofContext);

    statementVerified = typeAssertionVerified; ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
