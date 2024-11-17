"use strict";

import BracketedContext from "../../context/bracketted";
import StatementPartialContext from "../../context/partial/statement";

import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";

class CombinatorBracketedContext extends BracketedContext {
  getBracketedStatementNode() {
    const node = this.getNode(),
          bracketedStatementNode = node;  ///

    return bracketedStatementNode;
  }

  static fromNothing() {
    const string = `(${STATEMENT_META_TYPE_NAME})`,
          PartialContext = StatementPartialContext,
          combinatorBracketedContext = BracketedContext.fromStringAndPartialContext(CombinatorBracketedContext, string, PartialContext);

    return combinatorBracketedContext;
  }
}

const combinatorBracketedContext = CombinatorBracketedContext.fromNothing();

export default  combinatorBracketedContext;
