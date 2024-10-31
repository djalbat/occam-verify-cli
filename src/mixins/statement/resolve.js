"use strict";

import { definedAssertionFromStatement, containedAssertionFromStatement } from "../../utilities/verification";

function resolveAsDefinedAssertion(statement, substitutions, generalContext, specificContext) {
  let resolvedAsDefinedAssertion = false;

  const context = generalContext, ///
        definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Resolving the '${statementString}' statement as a defined assertion...`);

    const context = specificContext,  ///
          definedAssertionVerified = definedAssertion.resolve(substitutions, context);

    resolvedAsDefinedAssertion = definedAssertionVerified; ///

    if (resolvedAsDefinedAssertion) {
      specificContext.debug(`...resolved the '${statementString}' statement as a defined assertion.`);
    }
  }

  return resolvedAsDefinedAssertion;
}

function resolveAsContainedAssertion(statement, substitutions, generalContext, specificContext) {
  let resolvedAsContainedAssertion = false;

  const context = generalContext, ///
        containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Resolving the '${statementString}' statement as a contained assertion...`);

    const context = specificContext,  ///
          containedAssertionVerified = containedAssertion.resolve(substitutions, context);

    resolvedAsContainedAssertion = containedAssertionVerified; ///

    if (resolvedAsContainedAssertion) {
      specificContext.debug(`...resolved the '${statementString}' statement as a contained assertion.`);
    }
  }

  return resolvedAsContainedAssertion;
}

const resolveMixins = [
  resolveAsDefinedAssertion,
  resolveAsContainedAssertion
];

export default resolveMixins;
