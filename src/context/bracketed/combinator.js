"use strict";

import BracketedContext from "../../context/bracketted";
import StatementNodeAndTokens from "../../nodeAndTokens/statement";

import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";

export default class CombinatorBracketedContext extends BracketedContext {
  getBracketedStatementNode() {
    const node = this.getNode(),
          bracketedStatementNode = node;  ///

    return bracketedStatementNode;
  }

  static fromNothing() {
    const string = `(${STATEMENT_META_TYPE_NAME})`,
          NodeAndTokens = StatementNodeAndTokens,
          combinatorBracketedContext = BracketedContext.fromStringAndNodeAndTokens(CombinatorBracketedContext, string, NodeAndTokens);

    return combinatorBracketedContext;
  }
}
