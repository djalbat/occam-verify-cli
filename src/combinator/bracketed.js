"use strict";

import shim from "../shim";
import Combinator from "../combinator";
import CombinatorBracketedContext from "../context/bracketed/combinator";

import { unifyStatementWithCombinator } from "../utilities/unification";

const combinatorBracketedContext = CombinatorBracketedContext.fromNothing();

export const bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode();  ///

export default class BracketedCombinator extends Combinator {
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
    const { Statement } = shim,
          statementNode = bracketedStatementNode, ///
          context = combinatorBracketedContext, ///
          statement = Statement.fromStatementNode(statementNode, context),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}
