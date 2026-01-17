"use strict";

import nominalContext from "../context/nominal";

import { withinFragment } from "../utilities/fragment";
import { BASE_TYPE_SYMBOL } from "../constants";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { instantiateCombinator, instantiateConstructor } from "../process/instantiate";
import { combinatorFromCombinatorNode, constructorFromConstructorNode } from "../utilities/element";

let bracketedCombinator = null,
    bracketedConstructor = null;

export function bracketedCombinatorFromNothing() {
  if (bracketedCombinator === null) {
    const context = nominalContext; ///

    bracketedCombinator = withinFragment((context) => {
      const bracketedCombinatorString = `(${STATEMENT_META_TYPE_NAME})`,
            string = bracketedCombinatorString, ///
            combinatorNode = instantiateCombinator(string, context),
            bracketedCombinatorNode = combinatorNode,  ///
            bracketedCombinator = combinatorFromCombinatorNode(bracketedCombinatorNode, context);

      return bracketedCombinator;
    }, context);
  }

  return bracketedCombinator;
}

export function bracketedConstructorFromNothing() {
  if (bracketedConstructor === null) {
    const context = nominalContext; ///

    bracketedConstructor = withinFragment((context) => {
      const bracketedConstructorString = `(${BASE_TYPE_SYMBOL})`,
            string = bracketedConstructorString,  ///
            constructorNode = instantiateConstructor(string, context),
            bracketedConstructorNode = constructorNode, ///
            bracketedConstructor = constructorFromConstructorNode(bracketedConstructorNode, context);

      return bracketedConstructor;
    }, context);
  }

  return bracketedConstructor;
}
