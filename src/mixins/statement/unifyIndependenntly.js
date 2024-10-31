"use strict";

import { definedAssertionFromStatement, containedAssertionFromStatement } from "../../utilities/verification";

function unifyIndependentlyAsDefinedAssertion(statement, substitutions, generalContext, specificContext) {
  let unifiedIndependentlyAsDefinedAssertion = false;

  const context = generalContext, ///
        definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Unifying the '${statementString}' statement as a defined assertion independently...`);

    const context = specificContext,  ///
          definedAssertionUnifiedIndependently = definedAssertion.unifyIndependently(substitutions, context);

    unifiedIndependentlyAsDefinedAssertion = definedAssertionUnifiedIndependently; ///

    if (unifiedIndependentlyAsDefinedAssertion) {
      specificContext.debug(`...unified the '${statementString}' statement as a defined assertion independently.`);
    }
  }

  return unifiedIndependentlyAsDefinedAssertion;
}

function unifyIndependentlyAsContainedAssertion(statement, substitutions, generalContext, specificContext) {
  let unifiedIndependentlyAsContainedAssertion = false;

  const context = generalContext, ///
        containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Unifying the '${statementString}' statement as a contained assertion independently...`);

    const context = specificContext,  ///
          containedAssertionUnifiedIndependently = containedAssertion.unifyIndependently(substitutions, context);

    unifiedIndependentlyAsContainedAssertion = containedAssertionUnifiedIndependently; ///

    if (unifiedIndependentlyAsContainedAssertion) {
      specificContext.debug(`...unified the '${statementString}' statement as a contained assertion independently.`);
    }
  }

  return unifiedIndependentlyAsContainedAssertion;
}

const unifyIndependentlyMixins = [
  unifyIndependentlyAsDefinedAssertion,
  unifyIndependentlyAsContainedAssertion
];

export default unifyIndependentlyMixins;
