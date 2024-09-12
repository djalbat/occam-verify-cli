"use strict";

import shim from "../shim";
import Term from "../term";
import bracketedConstructor from "../constructor/bracketed";
import termWithConstructorUnifier from "../unifier/termWithConstructor";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term/argument/term"),
      variableNodeQuery = nodeQuery("/term/variable!");

function verifyTerm(termNode, terms, localContext, verifyAhead) {
  let termVerified;

  const termString = localContext.nodeAsString(termNode);

  localContext.trace(`Verifying the '${termString}' term...`, termNode);

  const verifyTermFunctions = [
    verifyTermAsVariable,
    unifyTermWithConstructors,
    unifyTermWithBracketedConstructor
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

      terms.pop();

      termVerifiedAsVariable = verifiedAhead; ///
    }

    if (termVerifiedAsVariable) {
      localContext.debug(`...verified the '${termString}' term as a variable.`, termNode);
    }
  }

  return termVerifiedAsVariable;
}

function unifyTermWithConstructors(termNode, terms, localContext, verifyAhead) {
  let termUnifiedWithConstructors = false;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode === null) {
    const constructors = localContext.getConstructors();

    termUnifiedWithConstructors = constructors.some((constructor) => {
      const termUnifiedWithConstructor = unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead);

      if (termUnifiedWithConstructor) {
        return true;
      }
    });
  }

  return termUnifiedWithConstructors;
}

function unifyTermWithBracketedConstructor(termNode, terms, localContext, verifyAhead) {
  let termUnifiedWithBracketedConstructor;

  const termString = localContext.nodeAsString(termNode),
        bracketedTerms = [];

  localContext.trace(`Unifying the '${termString}' term with the bracketed constructor...`, termNode);

  termUnifiedWithBracketedConstructor = unifyTermWithConstructor(termNode, bracketedTerms, bracketedConstructor, localContext, () => {
    let verifiedAhead;

    const bracketedTermNode = termNode; ///

    termNode = termNodeQuery(bracketedTermNode); ///

    const termVVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

    verifiedAhead = termVVerified;  ///

    return verifiedAhead;
  });

  if (termUnifiedWithBracketedConstructor) {
    localContext.debug(`...unified the '${termString}' term with the bracketed constructor.`, termNode);
  }

  return termUnifiedWithBracketedConstructor;
}

function unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead) {
  let termUnifiedWithConstructor = false;

  const termString = localContext.nodeAsString(termNode),
        constructorString = constructor.getString(),
        constructorTermNode = constructor.getTermNode();

  localContext.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`, termNode);

  const termNodeA = termNode,  ///
        constructorTermNodeB = constructorTermNode,  ///
        unified = termWithConstructorUnifier.unify(termNodeA, constructorTermNodeB, localContext);

  if (unified) {
    let verifiedAhead;

    const type = constructor.getType(),
          term = Term.fromTermNodeAndType(termNode, type);

    terms.push(term);

    verifiedAhead = verifyAhead();

    terms.pop();

    termUnifiedWithConstructor = verifiedAhead;  ///
  }

  if (termUnifiedWithConstructor) {
    localContext.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`, termNode);
  }

  return termUnifiedWithConstructor;
}

