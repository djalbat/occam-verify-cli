"use strict";

import verifyEquality from "../verify/equality";
import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, context) {
  let statementVerified = false;

  const statementString = nodeAsString(statementNode);

  context.debug(`Verifying the '${statementString}' statement...`, statementNode);

  const equalityNode = equalityNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

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

  if (statementVerified) {
    context.info(`Verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}
