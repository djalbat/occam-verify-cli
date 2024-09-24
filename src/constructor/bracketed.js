"use strict";

import Constructor from "../constructor";
import bracketedConstructorTermNode from "../node/term/constructor/bracketed";
import bracketedConstructorDeclarationTokens from "../tokens/constructorTerm/bracketed";

import { nodeAsString } from "../utilities/string";

class BracketedConstructor extends Constructor {
  static fromNothing() {
    const node = bracketedConstructorTermNode,  ///
          tokens = bracketedConstructorDeclarationTokens, ///
          string = nodeAsString(node, tokens),
          termNode = node, ///
          bracketedConstructor = new BracketedConstructor(termNode, string);

    return bracketedConstructor;
  }
}

const bracketedConstructor = BracketedConstructor.fromNothing();

export default bracketedConstructor;
