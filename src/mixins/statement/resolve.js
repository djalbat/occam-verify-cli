"use strict";

import DefinedAssertion from "../../assertion/defined";
import ContainedAssertion from "../../assertion/contained";

import { nodeQuery } from "../../utilities/query";

const definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

function resolveAsDefinedAssertion(statement, substitutions, localContextA, localContextB) {
  let resolvedAsDefinedAssertion = false;

  const localContext = localContextA, ///
        statementNode = statement.getNode(),
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        definedAssertion = DefinedAssertion.fromDefinedAssertionNode(definedAssertionNode, localContext);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    localContextB.trace(`Resolving the '${statementString}' statement as a defined assertion...`);

    const localContext = localContextB, ///
          definedAssertionVerified = definedAssertion.resolve(substitutions, localContext);

    resolvedAsDefinedAssertion = definedAssertionVerified; ///

    if (resolvedAsDefinedAssertion) {
      localContextB.debug(`...resolved the '${statementString}' statement as a defined assertion.`);
    }
  }

  return resolvedAsDefinedAssertion;
}

function resolveAsContainedAssertion(statement, substitutions, localContextA, localContextB) {
  let resolvedAsContainedAssertion = false;

  const localContext = localContextA, ///
        statementNode = statement.getNode(),
        containedAssertionNode = containedAssertionNodeQuery(statementNode),
        containedAssertion = ContainedAssertion.fromContainedAssertionNode(containedAssertionNode, localContext);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    localContextB.trace(`Resolving the '${statementString}' statement as a contained assertion...`);

    const localContext = localContextB, ///
          containedAssertionVerified = containedAssertion.resolve(substitutions, localContext);

    resolvedAsContainedAssertion = containedAssertionVerified; ///

    if (resolvedAsContainedAssertion) {
      localContextB.debug(`...resolved the '${statementString}' statement as a contained assertion.`);
    }
  }

  return resolvedAsContainedAssertion;
}

const resolveMixins = [
  resolveAsDefinedAssertion,
  resolveAsContainedAssertion
];

export default resolveMixins;
