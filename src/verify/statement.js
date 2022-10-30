"use strict";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, context = this) {
  let statementVerified = false;

  context.begin(statementNode);

  const equalityNode = equalityNodeQuery(statementNode),
        statementString = nodeAsString(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  context.debug(`Verifying the '${statementString}' statement...`);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = context.verifyEquality(equalityNode);

    statementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const typeAssertionVerified = context.verifyTypeAssertion(typeAssertionNode);

    statementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  statementVerified ?
    context.complete(statementNode) :
      context.halt(statementNode);

  return statementVerified;
}
