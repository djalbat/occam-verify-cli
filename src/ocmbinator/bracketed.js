"use strict";

import Combinator from "../combinator";
import combinatorReleaseContext from "../context/release/combinator";

import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { statementNodeFromStatementString } from "../utilities/string";

class BracketedCombinator extends Combinator {
  static fromNothing() {
    const statementString = `(${STATEMENT_META_TYPE_NAME})`,
          releaseContext = combinatorReleaseContext, ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          bracketedCombinator = new BracketedCombinator(statementNode);

    return bracketedCombinator;
  }
}

const bracketedCombinator = BracketedCombinator.fromNothing();

export default bracketedCombinator;
