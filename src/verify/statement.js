"use strict";

import verifyEquality from "../verify/equality";
import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, context) {
  let statementVerified = false;

  context.begin(statementNode);

  const equalityNode = equalityNodeQuery(statementNode),
        statementString = nodeAsString(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  context.debug(`Verifying the '${statementString}' statement...`);

  if (false) {
    ///
  } else if (equalityNode !== null) {
    const equalityVerified = verifyEquality(equalityNode, context);

    statementVerified = equalityVerified; ///
  } else if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, context);

    statementVerified = typeAssertionVerified; ///
  } else {
    debugger
  }

  statementVerified ?
    context.complete(statementNode) :
      context.halt(statementNode);

  return statementVerified;
}
