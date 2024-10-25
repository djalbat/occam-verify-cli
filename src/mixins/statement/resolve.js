"use strict";

import DefinedAssertion from "../../assertion/defined";
import ContainedAssertion from "../../assertion/contained";

import { nodeQuery } from "../../utilities/query";

const definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

function resolveAsDefinedAssertion(statement, substitutions, generalContext, specificContext) {
  let resolvedAsDefinedAssertion = false;

  const context = generalContext, ///
        statementNode = statement.getNode(),
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        definedAssertion = DefinedAssertion.fromDefinedAssertionNode(definedAssertionNode, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Resolving the '${statementString}' statement as a defined assertion...`);

    const localContext = specificContext, ///
          definedAssertionVerified = definedAssertion.resolve(substitutions, localContext);

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
        statementNode = statement.getNode(),
        containedAssertionNode = containedAssertionNodeQuery(statementNode),
        containedAssertion = ContainedAssertion.fromContainedAssertionNode(containedAssertionNode, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    specificContext.trace(`Resolving the '${statementString}' statement as a contained assertion...`);

    const localContext = specificContext, ///
          containedAssertionVerified = containedAssertion.resolve(substitutions, localContext);

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
