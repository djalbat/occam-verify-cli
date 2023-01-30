"use strict";

import Combinator from "../combinator";

import equalityCombinatorStatementNode from "../node/statement/combinator/equality";

class EqualityCombinator extends Combinator {
  static fromNothing() {
    const statementNode = equalityCombinatorStatementNode,  ///
          equalityCombinator = new EqualityCombinator(statementNode);

    return equalityCombinator;
  }
}

const equalityCombinator = EqualityCombinator.fromNothing();

export default equalityCombinator;
