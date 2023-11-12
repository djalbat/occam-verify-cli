"use strict";

import termNodesVerifier from "../verifier/nodes/term";

import { first } from "../utilities/array";
import { nodeQuery, variableNameFromVariableNode } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTerm(termNode, types, context, verifyAhead) {
  let termVerified;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsStandaloneVariable,
    verifyTermAgainstConstructors
  ];

  termVerified = verifyTermFunctions.some((verifyTermFunction) => {
    const termVerified = verifyTermFunction(termNode, types, context, verifyAhead);

    if (termVerified) {
      return true;
    }
  });

  if (termVerified) {
    const firstType = first(types),
          type = firstType, ///
          typeName = type.getName();

    context.debug(`...verified the '${termString}' term, which has type '${typeName}'.`, termNode);
  }

  return termVerified;
}

export function verifyTermAgainstConstructors(termNode, types, context, verifyAhead) {
  let termVerifiedAgainstConstructors;

  const constructors = context.getConstructors();

  termVerifiedAgainstConstructors = constructors.some((constructor) => {
    const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, types, constructor, context, () => {
      const verifiedAhead = verifyAhead(context);

      return verifiedAhead;
    });

    if (termVerifiedAgainstConstructor) {
      return true;
    }
  });

  return termVerifiedAgainstConstructors;
}

export function verifyTermAsVariable(termNode, variables, context, verifyAhead) {
  let termVerifiedAsVariable = false;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term as a variable...`, termNode);

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      const variable = context.findVariableByVariableName(variableName);

      variables.push(variable);

      termVerifiedAsVariable = true;
    }
  }

  if (termVerifiedAsVariable) {
    context.debug(`...verified the '${termString}' term as a variable.`, termNode);
  }

  return termVerifiedAsVariable;
}

function verifyTermAgainstConstructor(termNode, types, constructor, context, verifyAhead) {
  let termVerifiedAgainstConstructor = false;

  const termString = context.nodeAsString(termNode),
        constructorString = constructor.getString();

  context.trace(`Verifying the '${termString}' term against the '${constructorString}' constructor...`, termNode);

  const constructorTermNode = constructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = constructorTermNode,  ///
        nodeVerified = termNodesVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, verifyAhead);

  if (nodeVerified) {
    const type = constructor.getType();

    types.push(type);

    termVerifiedAgainstConstructor = true;
  }

  if (termVerifiedAgainstConstructor) {
    context.debug(`...verified the '${termString}' term against the '${constructorString}' constructor.`, termNode);
  }

  return termVerifiedAgainstConstructor;
}

function verifyTermAsStandaloneVariable(termNode, types, context, verifyAhead) {
  let termVerifiedAsStandaloneVariable;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term as a standalone variable...`, termNode);

  const variables = [],
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, verifyAhead);

  if (termVerifiedAsVariable) {
    const firstVariable = first(variables),
          variable = firstVariable, ///
          type = variable.getType();

    types.push(type);
  }

  termVerifiedAsStandaloneVariable = termVerifiedAsVariable;  ///

  if (termVerifiedAsStandaloneVariable) {
    context.debug(`...verified the '${termString}' term as a standalone variable.`, termNode);
  }

  return termVerifiedAsStandaloneVariable;
}
