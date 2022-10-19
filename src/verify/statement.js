"use strict";

import { loggingUtilities } from "necessary";

import verifyEquality from "../verify/equality";
import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

const { log } = loggingUtilities;

export default function verifyStatement(statementNode, context) {
  let statementVerified = false;

  const statementString = nodeAsString(statementNode);

  log.debug(`Verifying the '${statementString}' statement...`);

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
    log.info(`Verified the '${statementString}' statement.`);
  }

  return statementVerified;
}
