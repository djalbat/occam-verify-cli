"use strict";

import shim from "../shim";
import Term from "../term";
import bracketedConstructor from "../constructor/bracketed";
import termAgainstConstructorUnifier from "../unifier/termAgainstConstructor";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term/argument/term"),
      variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, terms, localContext, verifyAhead) {
  let termVerified;

  const termString = localContext.nodeAsString(termNode);

  localContext.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsVariable,
    verifyTermAgainstConstructors,
    verifyTermAgainstBracketedConstructor
  ];

  termVerified = verifyTermFunctions.some((verifyTermFunction) => {
    const termVerified = verifyTermFunction(termNode, terms, localContext, verifyAhead);

    if (termVerified) {
      return true;
    }
  });

  if (termVerified) {
    localContext.debug(`...verified the '${termString}' term.`, termNode);
  }

  return termVerified;
}

export function verifyStandaloneTerm(termNode, localContext, verifyAhead) {
  let standaloneTermVerified;

  const termString = localContext.nodeAsString(termNode);

  localContext.trace(`Verifying the '${termString}' standalone term...`, termNode);

  const terms = [],
        termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

  standaloneTermVerified = termVerified;  ///

  if (standaloneTermVerified) {
    localContext.debug(`...verified the '${termString}' standalone term.`, termNode);
  }

  return standaloneTermVerified;
}

Object.assign(shim, {
  verifyTerm
});

export default verifyTerm;

function verifyTermAsVariable(termNode, terms, localContext, verifyAhead) {
  let termVerifiedAsVariable = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const termString = localContext.nodeAsString(termNode);

    localContext.trace(`Verifying the '${termString}' term as a variable...`, termNode);

    const variable = localContext.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      let verifiedAhead;

      const type = variable.getType(),
            term = Term.fromTermNodeAndType(termNode, type);

      terms.push(term);

      verifiedAhead = verifyAhead();

      if (!verifiedAhead) {
        terms.pop();
      }

      termVerifiedAsVariable = verifiedAhead;  ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}

function verifyTermAgainstConstructors(termNode, terms, localContext, verifyAhead) {
  let termVerifiedAgainstConstructors = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode === null) {
    const constructors = localContext.getConstructors();

    termVerifiedAgainstConstructors = constructors.some((constructor) => {
      const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead);

      if (termVerifiedAgainstConstructor) {
        return true;
      }
    });
  }

  return termVerifiedAgainstConstructors;
}

function verifyTermAgainstBracketedConstructor(termNode, terms, localContext, verifyAhead) {
  let termVerifiedAgainstBracketedConstructor;

  const termString = localContext.nodeAsString(termNode),
        bracketedConstructorString = bracketedConstructor.getString();

  localContext.trace(`Verifying the '${termString}' term against the '${bracketedConstructorString}' bracketed constructor...`, termNode);

  const bracketedConstructorTermNode = bracketedConstructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = bracketedConstructorTermNode,  ///
        nodeUnified = termAgainstConstructorUnifier.unifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, () => {
          let verifiedAhead;

          const bracketedTermNode = termNode; ///

          termNode = termNodeQuery(termNode); ///

          if (termNode === null) {
            verifiedAhead = false;
          } else {
            let type;

            verifyTerm(termNode, terms, localContext, () => {
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

  termVerifiedAgainstBracketedConstructor = nodeUnified;  ///

  if (termVerifiedAgainstBracketedConstructor) {
    localContext.debug(`...verified the '${termString}' term against the '${bracketedConstructorString}' constructor.`, termNode);
  }

  return termVerifiedAgainstBracketedConstructor;
}

function verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
  let termVerifiedAgainstConstructor;

  const termString = localContext.nodeAsString(termNode),
        constructorString = constructor.getString();

  localContext.trace(`Verifying the '${termString}' term against the '${constructorString}' constructor...`, termNode);

  const constructorTermNode = constructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = constructorTermNode,  ///
        nodeUnify = termAgainstConstructorUnifier.unifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, () => {
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

  termVerifiedAgainstConstructor = nodeUnify;  ///

  if (termVerifiedAgainstConstructor) {
    localContext.debug(`...verified the '${termString}' term against the '${constructorString}' constructor.`, termNode);
  }

  return termVerifiedAgainstConstructor;
}

