"use strict";

import shim from "../../shim";
import BracketedConstructor from "../../constructor/bracketed";

import { nodeQuery } from "../../utilities/query";
import { unifyTermWithConstructor } from "../../utilities/unification";

const termNodeQuery = nodeQuery("/term/argument/term");

function unifyWithBracketedConstructor(term, context, verifyAhead) {
  let unifiedWithBracketedConstructor;

  const termString = term.getString();

  context.trace(`Unifying the '${termString}' term with the bracketed constructor...`, term);

  const bracketedConstructor = BracketedConstructor.fromNothing();

  unifiedWithBracketedConstructor = unifyWithConstructor(term, bracketedConstructor, context, () => {
    let verifiedAhead = false;

    const { Term } = shim,
          bracketedTerm = term, ///
          bracketedTermNode = bracketedTerm.getNode(),
          termNode = termNodeQuery(bracketedTermNode); ///

    term = Term.fromTermNode(termNode, context);

    if (term !== null) {
      const termVVerified = term.verify(context, () => {
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

  if (unifiedWithBracketedConstructor) {
    context.debug(`...unified the '${termString}' term with the bracketed constructor.`, term);
  }

  return unifiedWithBracketedConstructor;
}

function unifyWithConstructors(term, context, verifyAhead) {
  let unifiedWithConstructors;

  const constructors = context.getConstructors();

  unifiedWithConstructors = constructors.some((constructor) => {
    const unifiedWithConstructor = unifyWithConstructor(term, constructor, context, verifyAhead);

    if (unifiedWithConstructor) {
      return true;
    }
  });

  return unifiedWithConstructors;
}

const unifyMixins = [
  unifyWithBracketedConstructor,
  unifyWithConstructors
];

export default unifyMixins;

function unifyWithConstructor(term, constructor, context, verifyAhead) {
  let unifiedWithConstructor = false;

  const termString = term.getString(),
        constructorString = constructor.getString();

  context.trace(`Unifying the '${termString}' term with the '${constructorString}' constructor...`, term);

  const termUnifiedWithConstructor = unifyTermWithConstructor(term, constructor, context);

  if (termUnifiedWithConstructor) {
    let verifiedAhead;

    const type = constructor.getType();

    term.setType(type);

    verifiedAhead = verifyAhead();

    unifiedWithConstructor = verifiedAhead;  ///
  }

  if (unifiedWithConstructor) {
    context.debug(`...unified the '${termString}' term with the '${constructorString}' constructor.`, term);
  }

  return unifiedWithConstructor;
}
