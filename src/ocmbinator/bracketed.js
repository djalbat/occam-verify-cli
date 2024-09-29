"use strict";

import Statement from "../statement";
import Combinator from "../combinator";
import bracketedCombinatorStatementNode from "../node/statement/combinator/bracketed";

import { bracketedCombinatorStatementString } from "../node/statement/combinator/bracketed";

const fileContext = {
  nodeAsString: (node) => {
    const string = bracketedCombinatorStatementString;  ///

    return string;
  }
};

class BracketedCombinator extends Combinator {
  static fromNothing() {
    const statementNode = bracketedCombinatorStatementNode,  ///
          statement = Statement.fromStatementNode(statementNode, fileContext),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}

const bracketedCombinator = BracketedCombinator.fromNothing();

export default bracketedCombinator;
