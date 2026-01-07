"use strict";

import nominalContext from "../context/nominal";

import { BASE_TYPE_SYMBOL } from "../constants";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { instantiateCombinator, instantiateConstructor } from "../process/instantiate";
import { combinatorFromCombinatorNode, constructorFromConstructorNode } from "../utilities/element";

let bracketedCombinator = null,
    bracketedConstructor = null;

export function bracketedCombinatorFromNothing() {
  if (bracketedCombinator === null) {
    let context;

    const string = `(${STATEMENT_META_TYPE_NAME})`;

    context = nominalContext; ///

    const combinatorNode = instantiateCombinator(string, context),
          bracketedCombinatorNode = combinatorNode;  ///

    context = {
      nodeAsString: () => string
    };

    bracketedCombinator = combinatorFromCombinatorNode(bracketedCombinatorNode, context);
  }

  return bracketedCombinator;
}

export function bracketedConstructorFromNothing() {
  if (bracketedConstructor === null) {
    let context;

    const string = `(${BASE_TYPE_SYMBOL})`;

    context = nominalContext; ///

    const constructorNode = instantiateConstructor(string, context),
          bracketedConstructorNode = constructorNode;  ///

    context = {
      nodeAsString: () => string
    };

    bracketedConstructor = constructorFromConstructorNode(bracketedConstructorNode, context);
  }

  return bracketedConstructor;
}
