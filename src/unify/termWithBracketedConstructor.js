"use strict";

import shim from "../shim";
import bracketedConstructor from "../constructor/bracketed";

import { nodeQuery } from "../utilities/query";
import { unifyTermWithConstructor } from "../unify/termWithConstructors";

const termNodeQuery = nodeQuery("/term/argument/term");

export default function unifyTermWithBracketedConstructor(termNode, terms, localContext, verifyAhead) {
  let termUnifiedWithBracketedConstructor;

  const termString = localContext.nodeAsString(termNode),
        bracketedTerms = [];

  localContext.trace(`Unifying the '${termString}' term with the bracketed constructor...`, termNode);

  termUnifiedWithBracketedConstructor = unifyTermWithConstructor(termNode, bracketedTerms, bracketedConstructor, localContext, () => {
    let verifiedAhead;

    const bracketedTermNode = termNode; ///

    termNode = termNodeQuery(bracketedTermNode); ///

    const { verifyTerm } = shim,
          termVVerified = verifyTerm(termNode, terms, localContext, verifyAhead);

    verifiedAhead = termVVerified;  ///

    return verifiedAhead;
  });

  if (termUnifiedWithBracketedConstructor) {
    localContext.debug(`...unified the '${termString}' term with the bracketed constructor.`, termNode);
  }

  return termUnifiedWithBracketedConstructor;
}
