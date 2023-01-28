"use strict";

import Combinator from "../combinator";

import { bracketedCombinatorStatementNode } from "../utilities/node";

class BracketedCombinator extends Combinator {
  static fromNothing() {
    const statementNode = bracketedCombinatorStatementNode,  ///
          bracketedCombinator = new BracketedCombinator(statementNode);

    return bracketedCombinator;
  }
}

const bracketedCombinator = BracketedCombinator.fromNothing();

export default bracketedCombinator;
