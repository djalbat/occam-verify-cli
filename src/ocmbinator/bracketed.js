"use strict";

import Combinator from "../combinator";
import bracketedCombinatorReleaseContext from "../context/release/bracketedCombinator";

import { statementNodeFromStatementString } from "../utilities/string";

class BracketedCombinator extends Combinator {
  static fromNothing() {
    const statementString = "(Statement)",
          releaseContext = bracketedCombinatorReleaseContext, ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          bracketedCombinator = new BracketedCombinator(statementNode);

    return bracketedCombinator;
  }
}

const bracketedCombinator = BracketedCombinator.fromNothing();

export default bracketedCombinator;
