"use strict";

import dom from "../../dom";
import Combinator from "../combinator";
import combinatorBracketedContext from "../../context/bracketed/combinator";

import { domAssigned } from "../../dom";

export default domAssigned(class BracketedCombinator extends Combinator {
  unifyStatement(statement, assignments, stated, context) {
    let statementUnifies;

    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);

    statementUnifies = super.unifyStatement(statement, assignments, stated, context);

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
    }

    return statementUnifies;
  }

  static fromNothing() {
    const { Statement } = dom,
          bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode(),
          statementNode = bracketedStatementNode, ///
          context = combinatorBracketedContext, ///
          statement = Statement.fromStatementNode(statementNode, context),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
});
