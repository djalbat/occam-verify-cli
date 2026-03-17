"use strict";

import { nominally } from "../utilities/context";
import { BASE_TYPE_SYMBOL } from "../constants";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { instantiateCombinator, instantiateConstructor } from "../process/instantiate";
import { combinatorFromCombinatorNode, constructorFromConstructorNode } from "../utilities/element";

let bracketedCombinator = null,
    bracketedConstructor = null;

export function bracketedCombinatorFromNothing() {
  if (bracketedCombinator === null) {
    bracketedCombinator = nominally((context) => {
      const bracketedCombinatorString = `(${STATEMENT_META_TYPE_NAME})`,
            string = bracketedCombinatorString, ///
            combinatorNode = instantiateCombinator(string, context),
            bracketedCombinatorNode = combinatorNode,  ///
            bracketedCombinator = combinatorFromCombinatorNode(bracketedCombinatorNode, context);

      return bracketedCombinator;
    });
  }

  return bracketedCombinator;
}

export function bracketedConstructorFromNothing() {
  if (bracketedConstructor === null) {
    bracketedConstructor = nominally((context) => {
      const bracketedConstructorString = `(${BASE_TYPE_SYMBOL})`,
            string = bracketedConstructorString,  ///
            constructorNode = instantiateConstructor(string, context),
            bracketedConstructorNode = constructorNode, ///
            bracketedConstructor = constructorFromConstructorNode(bracketedConstructorNode, context);

      return bracketedConstructor;
    });
  }

  return bracketedConstructor;
}
