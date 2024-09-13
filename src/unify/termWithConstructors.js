"use strict";

import Term from "../term";
import termWithConstructorUnifier from "../unifier/termWithConstructor";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default function unifyTermWithConstructors(termNode, terms, localContext, verifyAhead) {
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

export function unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead) {
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
