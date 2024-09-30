"use strict";

import shim from "../shim";
import Combinator from "../combinator";
import bracketedCombinatorStatementNode from "../node/statement/combinator/bracketed";

import { bracketedCombinatorStatementString } from "../node/statement/combinator/bracketed";

const fileContext = {
  nodeAsString: (node) => {
    const string = bracketedCombinatorStatementString;  ///

    return string;
  }
};

export default class BracketedCombinator extends Combinator {
  static fromNothing() {
    const { Statement } = shim,
          statementNode = bracketedCombinatorStatementNode,  ///
          statement = Statement.fromStatementNode(statementNode, fileContext),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}
