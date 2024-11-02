"use strict";

import BracketedConstructor from "../../constructor/bracketed";

function unifyWithBracketedConstructor(term, context, verifyAhead) {
  let unifiedWithBracketedConstructor;

  const bracketedConstructor = BracketedConstructor.fromNothing();

  unifiedWithBracketedConstructor = bracketedConstructor.unifyTerm(term, context, verifyAhead);

  return unifiedWithBracketedConstructor;
}

function unifyWithConstructors(term, context, verifyAhead) {
  let unifiedWithConstructors;

  const constructors = context.getConstructors();

  unifiedWithConstructors = constructors.some((constructor) => {
    const unifiedWithConstructor = constructor.unifyTerm(term, context, verifyAhead);

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
