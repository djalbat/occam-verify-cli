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
    unifyTermAgainstConstructors,
    unifyTermAgainstBracketedConstructor
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

function unifyTermAgainstConstructors(termNode, terms, localContext, verifyAhead) {
  let termUnifiedAgainstConstructors = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode === null) {
    const constructors = localContext.getConstructors();

    termUnifiedAgainstConstructors = constructors.some((constructor) => {
      const termUnifiedAgainstConstructor = unifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead);

      if (termUnifiedAgainstConstructor) {
        return true;
      }
    });
  }

  return termUnifiedAgainstConstructors;
}

function unifyTermAgainstBracketedConstructor(termNode, terms, localContext, verifyAhead) {
  let termUnifiedAgainstBracketedConstructor;

  const termString = localContext.nodeAsString(termNode),
        bracketedConstructorString = bracketedConstructor.getString();

  localContext.trace(`Unifying the '${termString}' term against the '${bracketedConstructorString}' bracketed constructor...`, termNode);

  const bracketedConstructorTermNode = bracketedConstructor.getTermNode(),
        termNodeA = termNode,  ///
        constructorTermNodeB = bracketedConstructorTermNode,  ///
        unified = termAgainstConstructorUnifier.unify(termNodeA, constructorTermNodeB, localContext, () => {
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

  termUnifiedAgainstBracketedConstructor = unified;  ///

  if (termUnifiedAgainstBracketedConstructor) {
    localContext.debug(`...unified the '${termString}' term against the '${bracketedConstructorString}' constructor.`, termNode);
  }

  return termUnifiedAgainstBracketedConstructor;
}

function unifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
  let termUnifiedAgainstConstructor;

  const termString = localContext.nodeAsString(termNode),
        constructorString = constructor.getString();

  localContext.trace(`Unifying the '${termString}' term against the '${constructorString}' constructor...`, termNode);

  const constructorTermNode = constructor.getTermNode(),
        termNodeA = termNode,  ///
        constructorTermNodeB = constructorTermNode,  ///
        unified = termAgainstConstructorUnifier.unify(termNodeA, constructorTermNodeB, localContext, () => {
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

  termUnifiedAgainstConstructor = unified;  ///

  if (termUnifiedAgainstConstructor) {
    localContext.debug(`...unified the '${termString}' term against the '${constructorString}' constructor.`, termNode);
  }

  return termUnifiedAgainstConstructor;
}

