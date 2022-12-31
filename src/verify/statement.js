"use strict";

import verifyEquality from "../verify/equality";
import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  const equalityNode = equalityNodeQuery(statementNode),
        statementString = nodeAsString(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  proofContext.debug(`Verifying the '${statementString}' statement...`);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = verifyEquality(equalityNode, proofContext);

    statementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const types = [],
          typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, types, proofContext);

    statementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}
