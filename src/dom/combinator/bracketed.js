"use strict";

import dom from "../../dom";
import Combinator from "../combinator";
import combinatorBracketedContext from "../../context/bracketed/combinator";

import { domAssigned } from "../../dom";
import { unifyStatementWithCombinator } from "../../utilities/unification";

export default domAssigned(class BracketedCombinator extends Combinator {
  unifyStatement(statement, assignments, stated, context) {
    let statementUnified;

    const statementString = statement.getString();

    context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);

    const bracketedCombinator = this, ///
          combinator = bracketedCombinator, ///
          statementUnifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

    statementUnified = statementUnifiedWithCombinator;

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
    }

    return statementUnified;
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
