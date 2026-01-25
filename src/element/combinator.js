"use strict";

import { Element, elements } from "occam-furtle";

import { verifyCombinator } from "../process/verify";
import { unifyStatementWithCombinator } from "../process/unify";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

const { define } = elements;

export default define(class Combinator extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node)

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          combinatorString = this.getString();  ///

    context.trace(`Verifying the '${combinatorString}' combinator...`, node);

    const combinator = this,  ///
          combinatorVerifies = verifyCombinator(combinator, context);

    if (combinatorVerifies) {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorString}' combinator.`, node);
    }

    return verifies;
  }

  unifyStatement(statement, assignments, stated, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          combinatorString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

    const specifiContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specifiContext; ///

    const combinator = this, ///
          statementUnifiesWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, generalContext, specifiContext);

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
