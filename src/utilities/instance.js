"use strict";

import nominalContext from "../context/nominal";

import { BASE_TYPE_SYMBOL } from "../constants";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { instantiateTerm, instantiateStatement } from "../process/instantiate";
import { termFromTermNode, statementFromStatementNode } from "../utilities/element";

let bracketedConstructorTerm = null,
    bracketedCombinatorStatement = null;

export function bracketedConstructorTermFromNothing() {
  if (bracketedConstructorTerm === null) {
    let context;

    const string = `(${BASE_TYPE_SYMBOL})`;

    context = nominalContext; ///

    const node = instantiateTerm(string, context),
          bracketedConstructorTermNode = node;  ///

    context = {
      nodeAsString: () => string
    };

    bracketedConstructorTerm = termFromTermNode(bracketedConstructorTermNode, context);
  }

  return bracketedConstructorTerm;
}

export function bracketedCombinatorStatementFromNothing() {
  if (bracketedCombinatorStatement === null) {
    let context;

    const string = `(${STATEMENT_META_TYPE_NAME})`;

    context = nominalContext; ///

    const node = instantiateStatement(string, context),
          bracketedCombinatorStatementNode = node;  ///

    context = {
      nodeAsString: () => string
    };

    bracketedCombinatorStatement = statementFromStatementNode(bracketedCombinatorStatementNode, context);
  }

  return bracketedCombinatorStatement;
}
