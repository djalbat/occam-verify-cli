"use strict";

import { define } from "../../elements";
import { unifyStatementWithCombinatorStatement } from "../../process/unify";
import { statementFromJSON, statementToStatementJSON } from "../../utilities/json";

export default define(class CombinatorStatement {
  constructor(statement) {
    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getString() { return this.statement.getString(); }

  getStatementNode() {
    const statementNode = this.statement.getNode();

    return statementNode;
  }

  unifyStatement(statement, assignments, stated, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          combinatorStatementString = this.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorStatementString}' combinator's statement...`);

    const combinatorStatement = this, ///
          statementUnifiesWithCombinator = unifyStatementWithCombinatorStatement(statement, combinatorStatement, assignments, stated, context);

    statementUnifies = statementUnifiesWithCombinator; ///

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${combinatorStatementString}' combinator's statement.`);
    }

    return statementUnifies;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          json = statementJSON;

    return json;
  }

  static name = "CombinatorStatement";

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          combinator = new CombinatorStatement(statement);

    return combinator;
  }
});
