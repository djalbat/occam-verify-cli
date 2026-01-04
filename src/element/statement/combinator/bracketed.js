"use strict";

import CombinatorStatement from "../../statement/combinator";

import { define } from "../../../elements";
import { statementFromStatementNode } from "../../../utilities/element";
import { bracketedCombinatorStatementString, instantiateBracketedCombinatorStatement } from "../../../process/instantiate";

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
    const bracketedCombinatorStatementNode = instantiateBracketedCombinatorStatement(),
          nodeAsString = () => bracketedCombinatorStatementString,
          context = {
            nodeAsString
          },
          bracketedCombinatorStatement = statementFromStatementNode(bracketedCombinatorStatementNode, context);

    return bracketedCombinatorStatement;
  }
});
