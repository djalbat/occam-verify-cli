"use strict";

import Combinator from "../combinator";
import bracketedCombinatorStatementNode from "../node/statement/combinator/bracketed";
import bracketedCombinatorStatementTokens from "../tokens/combinatorStatement/bracketed";

import { nodeAsString } from "../utilities/string";

class BracketedCombinator extends Combinator {
  static fromNothing() {
    const node = bracketedCombinatorStatementNode,  ///
          tokens = bracketedCombinatorStatementTokens, ///
          string = nodeAsString(node, tokens),
          statementNode = node, ///
          bracketedCombinator = new BracketedCombinator(statementNode, string);

    return bracketedCombinator;
  }
}

const bracketedCombinator = BracketedCombinator.fromNothing();

export default bracketedCombinator;
