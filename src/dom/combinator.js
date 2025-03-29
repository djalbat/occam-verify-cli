"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { unifyStatementWithCombinator } from "../utilities/unification";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default domAssigned(class Combinator {
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
    let statementUnified;

    const combinator = this,  ///
          statementString = statement.getString(),
          combinatorString = combinator.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

    const statementUnifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

    statementUnified = statementUnifiedWithCombinator; ///

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
    }

    return statementUnified;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          combinator = new Combinator(statement);

    return combinator;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const { Statement } = dom,
          statement = Statement.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext),
          combinator = new Combinator(statement);

    return combinator;
  }
});
