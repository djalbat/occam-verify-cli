"use strict";

import shim from "../shim";
import Term from "../term";
import bracketedConstructor from "../constructor/bracketed";
import termAgainstConstructorUnifier from "../unifier/termAgainstConstructor";

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

      terms.pop();

      termVerifiedAsVariable = verifiedAhead; ///
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
        bracketedTerms = [];

  localContext.trace(`Unifying the '${termString}' term against the bracketed constructor...`, termNode);

  termUnifiedAgainstBracketedConstructor = unifyTermAgainstConstructor(termNode, bracketedTerms, bracketedConstructor, localContext, () => {
    let verifiedAhead;

    const bracketedTermNode = termNode; ///

    termNode = termNodeQuery(bracketedTermNode); ///

    const termVVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

    verifiedAhead = termVVerified;  ///

    return verifiedAhead;
  });


  if (termUnifiedAgainstBracketedConstructor) {
    localContext.debug(`...unified the '${termString}' term against the bracketed constructor.`, termNode);
  }

  return termUnifiedAgainstBracketedConstructor;
}

function unifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
  let termUnifiedAgainstConstructor = false;

  const termString = localContext.nodeAsString(termNode),
        constructorString = constructor.getString(),
        constructorTermNode = constructor.getTermNode();

  localContext.trace(`Unifying the '${termString}' term against the '${constructorString}' constructor...`, termNode);

  const termNodeA = termNode,  ///
        constructorTermNodeB = constructorTermNode,  ///
        unified = termAgainstConstructorUnifier.unify(termNodeA, constructorTermNodeB, localContext);

  if (unified) {
    let verifiedAhead;

    const type = constructor.getType(),
          term = Term.fromTermNodeAndType(termNode, type);

    terms.push(term);

    verifiedAhead = verifyAhead();

    terms.pop();

    termUnifiedAgainstConstructor = verifiedAhead;  ///
  }

  if (termUnifiedAgainstConstructor) {
    localContext.debug(`...unified the '${termString}' term against the '${constructorString}' constructor.`, termNode);
  }

  return termUnifiedAgainstConstructor;
}

