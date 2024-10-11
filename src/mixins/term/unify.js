"use strict";

import shim from "../../shim";
import BracketedConstructor from "../../constructor/bracketed";
import termWithConstructorUnifier from "../../unifier/termWithConstructor";

import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/term/argument/term");

function unifyTermWithBracketedConstructor(term, localContext, verifyAhead) {
  let termUnifiedWithBracketedConstructor;

  const termString = term.getString();

  localContext.trace(`Unifying the '${termString}' term with the bracketed constructor...`, term);

  const bracketedConstructor = BracketedConstructor.fromNothing();

  termUnifiedWithBracketedConstructor = unifyTermWithConstructor(term, bracketedConstructor, localContext, () => {
    let verifiedAhead = false;

    const { Term } = shim,
          bracketedTerm = term, ///
          bracketedTermNode = bracketedTerm.getNode(),
          termNode = termNodeQuery(bracketedTermNode); ///

    term = Term.fromTermNode(termNode, localContext);

    if (term !== null) {
      const termVVerified = term.verify(localContext, () => {
        let verifiedAhead;

        const type = term.getType();

        bracketedTerm.setType(type);

        verifiedAhead = verifyAhead();

        return verifiedAhead;
      });

      verifiedAhead = termVVerified;  ///
    }

    return verifiedAhead;
  });

  if (termUnifiedWithBracketedConstructor) {
    localContext.debug(`...unified the '${termString}' term with the bracketed constructor.`, term);
  }

  return termUnifiedWithBracketedConstructor;
}

function unifyTermWithConstructors(term, localContext, verifyAhead) {
  let termUnifiedWithConstructors = false;

  const constructors = localContext.getConstructors();

  termUnifiedWithConstructors = constructors.some((constructor) => {
    const termUnifiedWithConstructor = unifyTermWithConstructor(term, constructor, localContext, verifyAhead);

    if (termUnifiedWithConstructor) {
      return true;
    }
  });

  return termUnifiedWithConstructors;
}

const unifyMixins = [
  unifyTermWithBracketedConstructor,
  unifyTermWithConstructors
];

export default unifyMixins;

function unifyTermWithConstructor(term, constructor, localContext, verifyAhead) {
  let termUnifiedWithConstructor = false;

  const termString = term.getString(),
        constructorString = constructor.getString();

  localContext.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`, term);

  const termNode = term.getNode(),
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode(),
        unified = termWithConstructorUnifier.unify(termNode, constructorTermNode, localContext);

  if (unified) {
    let verifiedAhead;

    const type = constructor.getType();

    term.setType(type);

    verifiedAhead = verifyAhead();

    termUnifiedWithConstructor = verifiedAhead;  ///
  }

  if (termUnifiedWithConstructor) {
    localContext.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`, term);
  }

  return termUnifiedWithConstructor;
}
