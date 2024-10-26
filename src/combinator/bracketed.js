"use strict";

import shim from "../shim";
import Combinator from "../combinator";
import CombinatorBracketedContext from "../context/bracketed/combinator";

const combinatorBracketedContext = CombinatorBracketedContext.fromNothing();

export const bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode();  ///

export default class BracketedCombinator extends Combinator {
  static fromNothing() {
    const { Statement } = shim,
          statementNode = bracketedStatementNode, ///
          context = combinatorBracketedContext, ///
          statement = Statement.fromStatementNode(statementNode, context),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}
