"use strict";

import BracketedContext from "../../context/bracketted";
import TermNodeAndTokens from "../../nodeAndTokens/term";

import { OBJECT_TYPE_NAME } from "../../typeNames";

class ConstructorBracketedContext extends BracketedContext {
  getBracketedTermNode() {
    const node = this.getNode(),
          bracketedTermNode = node;  ///

    return bracketedTermNode;
  }

  static fromNothing() {
    const string = `(${OBJECT_TYPE_NAME})`,
          NodeAndTokens = TermNodeAndTokens,
          constructorBracketedContext = BracketedContext.fromStringAndNodeAndTokens(ConstructorBracketedContext, string, NodeAndTokens);

    return constructorBracketedContext;
  }
}

const constructorBracketedContext = ConstructorBracketedContext.fromNothing();

export default constructorBracketedContext;
