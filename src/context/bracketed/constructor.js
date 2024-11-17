"use strict";

import BracketedContext from "../../context/bracketted";
import TermPartialContext from "../../context/partial/term";

import { OBJECT_TYPE_NAME } from "../../typeNames";

class ConstructorBracketedContext extends BracketedContext {
  getBracketedTermNode() {
    const node = this.getNode(),
          bracketedTermNode = node;  ///

    return bracketedTermNode;
  }

  static fromNothing() {
    const string = `(${OBJECT_TYPE_NAME})`,
          PartialContext = TermPartialContext,
          constructorBracketedContext = BracketedContext.fromStringAndPartialContext(ConstructorBracketedContext, string, PartialContext);

    return constructorBracketedContext;
  }
}

const constructorBracketedContext = ConstructorBracketedContext.fromNothing();

export default constructorBracketedContext;
