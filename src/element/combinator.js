"use strict";

import Element from "../element";

import { define } from "../elements";
import { unifyStatementWithCombinator } from "../process/unify";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default define(class Combinator extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node)

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  unifyStatement(statement, assignments, stated, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          combinatorString = this.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

    const combinator = this, ///
          statementUnifiesWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

    statementUnifies = statementUnifiesWithCombinator; ///

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
    }

    return statementUnifies;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement,
          };

    return json;
  }

  static name = "Combinator";

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          combinator = new Combinator(statement);

    return combinator;
  }
});
