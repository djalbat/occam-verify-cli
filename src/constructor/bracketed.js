"use strict";

import shim from "../shim";
import Constructor from "../constructor";
import ConstructorBracketedContext from "../context/bracketed/constructor";

import { stringFromTermAndType } from "../constructor";

const constructorBracketedContext = ConstructorBracketedContext.fromNothing();

export const bracketedTermNode = constructorBracketedContext.getBracketedTermNode();

export default class BracketedConstructor extends Constructor {
  static fromNothing() {
    const { Term } = shim,
          termNode = bracketedTermNode,  ///
          context = constructorBracketedContext, ///
          term = Term.fromTermNode(termNode, context),
          type = null,
          string = stringFromTermAndType(term, type),
          bracketedConstructor = new BracketedConstructor(string, term);

    return bracketedConstructor;
  }
}
