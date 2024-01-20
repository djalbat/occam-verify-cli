"use strict";

import Term from "../term";
import termNodesVerifier from "../verifier/nodes/term";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, terms, context, verifyAhead) {
  let termVerified;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsStandaloneVariable,
    verifyTermAgainstConstructors
  ];

  termVerified = verifyTermFunctions.some((verifyTermFunction) => {
    const termVerified = verifyTermFunction(termNode, terms, context, verifyAhead);

    if (termVerified) {
      return true;
    }
  });

  if (termVerified) {
    context.debug(`...verified the '${termString}' term.`, termNode);
  }

  return termVerified;
}

Object.assign(termNodesVerifier, {
  verifyTerm
});

export default verifyTerm;

export function verifyTermAgainstConstructors(termNode, terms, context, verifyAhead) {
  let termVerifiedAgainstConstructors;

  const constructors = context.getConstructors();

  termVerifiedAgainstConstructors = constructors.some((constructor) => {
    const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead);

    if (termVerifiedAgainstConstructor) {
      return true;
    }
  });

  return termVerifiedAgainstConstructors;
}

export function verifyTermAsVariable(termNode, variables, context, verifyAhead) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = context.nodeAsString(termNode);

    context.trace(`Verifying the '${termString}' term as a variable...`, termNode);

    const variable = context.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      let verifiedAhead;

      variables.push(variable);

      verifiedAhead = verifyAhead();

      if (!verifiedAhead) {
        variables.pop();
      }

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      context.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}

function verifyTermAsStandaloneVariable(termNode, terms, context, verifyAhead) {
  let termVerifiedAsStandaloneVariable;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term as a standalone variable...`, termNode);

  const variables = [],
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, () => {
          let verifiedAhead;

          const firstVariable = first(variables),
                variable = firstVariable, ///
                type = variable.getType(),
                term = Term.fromTermNodeAndType(termNode, type);

          terms.push(term);

          verifiedAhead = verifyAhead();

          if (!verifiedAhead) {
            terms.pop();
          }

          return verifiedAhead;
        });

  termVerifiedAsStandaloneVariable = termVerifiedAsVariable;  ///

  if (termVerifiedAsStandaloneVariable) {
    context.debug(`...verified the '${termString}' term as a standalone variable.`, termNode);
  }

  return termVerifiedAsStandaloneVariable;
}

function verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead) {
  let termVerifiedAgainstConstructor;

  const termString = context.nodeAsString(termNode),
        constructorString = constructor.getString();

  context.trace(`Verifying the '${termString}' term against the '${constructorString}' constructor...`, termNode);

  const constructorTermNode = constructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = constructorTermNode,  ///
        nodeVerified = termNodesVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, () => {
          let verifiedAhead;

          const type = constructor.getType(),
                term = Term.fromTermNodeAndType(termNode, type);

          terms.push(term);

          verifiedAhead = verifyAhead();

          if (!verifiedAhead) {
            terms.pop();
          }

          return verifiedAhead;
        });

  termVerifiedAgainstConstructor = nodeVerified;  ///

  if (termVerifiedAgainstConstructor) {
    context.debug(`...verified the '${termString}' term against the '${constructorString}' constructor.`, termNode);
  }

  return termVerifiedAgainstConstructor;
}
