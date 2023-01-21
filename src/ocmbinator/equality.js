"use strict";

import Combinator from "../combinator";
import CombinatorReleaseContext from "../context/release/combinator";

import { statementNodeFromStatementString } from "../utilities/string";

class EqualityCombinator extends Combinator {
  static fromNothing() {
    const statementString = "Object = Object",
          releaseContext = CombinatorReleaseContext, ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          equalityCombinator = new EqualityCombinator(statementNode);

    return equalityCombinator;
  }
}

const equalityCombinator = EqualityCombinator.fromNothing();

export default equalityCombinator;
