"use strict";

import shim from "../shim";
import Constructor from "../constructor";
import bracketedConstructorTermNode from "../node/term/constructor/bracketed";

import { stringFromTermAndType } from "../constructor";
import { bracketedConstructorTermString } from "../node/term/constructor/bracketed";

const localContext = {
  nodeAsString: (node) => {
    const string = bracketedConstructorTermString;  ///

    return string;
  }
};

export default class BracketedConstructor extends Constructor {
  static fromNothing() {
    const { Term } = shim,
          termNode = bracketedConstructorTermNode,  ///
          term = Term.fromTermNode(termNode, localContext),
          type = null,
          string = stringFromTermAndType(term, type),
          bracketedConstructor = new BracketedConstructor(string, term);

    return bracketedConstructor;
  }
}
