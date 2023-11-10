"use strict";

import Combinator from "../combinator";
import equalityCombinatorStatementNode from "../node/statement/combinator/equality";
import unqualifiedEqualityCombinatorStatementTokens from "../tokens/statement/combinator/equality";

import { nodeAsString } from "../utilities/string";

class EqualityCombinator extends Combinator {
  static fromNothing() {
    const node = equalityCombinatorStatementNode,  ///
          tokens = unqualifiedEqualityCombinatorStatementTokens, ///
          string = nodeAsString(node, tokens),
          statementNode = node, ///
          equalityCombinator = new EqualityCombinator(statementNode, string);

    return equalityCombinator;
  }
}

const equalityCombinator = EqualityCombinator.fromNothing();

export default equalityCombinator;
