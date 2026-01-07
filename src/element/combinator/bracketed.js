"use strict";

import Combinator from "../combinator";

import { define } from "../../elements";
import { bracketedCombinatorFromNothing } from "../../utilities/instance";

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
    const bracketedCombinator = bracketedCombinatorFromNothing();

    return bracketedCombinator;
  }
});
