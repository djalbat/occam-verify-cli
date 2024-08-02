"use strict";

import Term from "../term";
import termNodesVerifier from "../verifier/nodes/term";
import verifyGivenVariable from "../verify/givenVariable";
import bracketedConstructor from "../constructor/bracketed";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term/argument/term"),
      variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, terms, context, verifyAhead) {
  let termVerified;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsVariable,
    verifyTermAgainstConstructors,
    verifyTermAgainstBracketedConstructor
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

export function verifyStandaloneTerm(termNode, context, verifyAhead) {
  let standaloneTermVerified;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' standalone term...`, termNode);

  const terms = [],
        termVerified = verifyTerm(termNode, terms, context, verifyAhead);

  standaloneTermVerified = termVerified;  ///

  if (standaloneTermVerified) {
    context.debug(`...verified the '${termString}' standalone term.`, termNode);
  }

  return standaloneTermVerified;
}

Object.assign(termNodesVerifier, {
  verifyTerm
});

export default verifyTerm;

function verifyTermAsVariable(termNode, terms, context, verifyAhead) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = context.nodeAsString(termNode);

    context.trace(`Verifying the '${termString}' term as a variable...`, termNode);

    const variables = [],
          givenVariableVerified = verifyGivenVariable(variableNode, variables, context, () => {
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

    termVerifiedAsVariable = givenVariableVerified;  ///

    if (termVerifiedAsVariable) {
      context.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
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

function verifyTermAgainstConstructors(termNode, terms, context, verifyAhead) {
  let termVerifiedAgainstConstructors = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode === null) {
    const constructors = context.getConstructors();

    termVerifiedAgainstConstructors = constructors.some((constructor) => {
      const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead);

      if (termVerifiedAgainstConstructor) {
        return true;
      }
    });
  }

  return termVerifiedAgainstConstructors;
}

function verifyTermAgainstBracketedConstructor(termNode, terms, context, verifyAhead) {
  let termVerifiedAgainstBracketedConstructor;

  const termString = context.nodeAsString(termNode),
        bracketedConstructorString = bracketedConstructor.getString();

  context.trace(`Verifying the '${termString}' term against the '${bracketedConstructorString}' bracketed constructor...`, termNode);

  const bracketedConstructorTermNode = bracketedConstructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = bracketedConstructorTermNode,  ///
        nodeVerified = termNodesVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, () => {
          let verifiedAhead;

          const bracketedTermNode = termNode; ///

          termNode = termNodeQuery(termNode); ///

          if (termNode === null) {
            verifiedAhead = false;
          } else {
            let type;

            verifyTerm(termNode, terms, context, () => {
              let verifiedAhead;

              const firstTerm = first(terms),
                    term = firstTerm; ///

              type = term.getType();

              verifiedAhead = true;

              return verifiedAhead;
            });

            terms.pop();

            termNode = bracketedTermNode; ///

            const term = Term.fromTermNodeAndType(termNode, type);

            terms.push(term);

            verifiedAhead = verifyAhead();

            if (!verifiedAhead) {
              terms.pop();
            }
          }

          return verifiedAhead;
        });

  termVerifiedAgainstBracketedConstructor = nodeVerified;  ///

  if (termVerifiedAgainstBracketedConstructor) {
    context.debug(`...verified the '${termString}' term against the '${bracketedConstructorString}' constructor.`, termNode);
  }

  return termVerifiedAgainstBracketedConstructor;
}

