"use strict";

import CombinatorStatement from "../../statement/combinator";

import { define } from "../../../elements";
import { bracketedCombinatorStatementFromNothing } from "../../../utilities/instance";

export default define(class BracketedCombinatorStatement extends CombinatorStatement {
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

  static name = "BracketedCombinatorStatement";

  static fromNothing() {
    const bracketedCombinatorStatement = bracketedCombinatorStatementFromNothing();

    return bracketedCombinatorStatement;
  }
});
