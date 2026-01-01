"use strict";

import ontology from "../../ontology";
import Combinator from "../combinator";

import { define } from "../../ontology";
import { bracketedCombinatorStatementString, instantiateBracketedCombinatorStatement } from "../../process/instantiate";

export default define(class BracketedCombinator extends Combinator {
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

  static name = "BracketedCombinator";

  static fromNothing() {
    const { Statement } = ontology,
          bracketedCombinatorStatementNode = instantiateBracketedCombinatorStatement(),
          string = bracketedCombinatorStatementString,  ///
          node = bracketedCombinatorStatementNode, ///
          statement = new Statement(string, node),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
});
