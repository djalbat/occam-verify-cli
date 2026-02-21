"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { verifyCombinator } from "../process/verify";
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

  getConbinatorNode() {
    const node = this.getNode(),
          combinatorNode = node;  ///

    return combinatorNode;
  }

  verify() {
    let verifies;

    const context = this.getContext(),
          combinatorString = this.getString();  ///

    context.trace(`Verifying the '${combinatorString}' combinator...`);

    const combinator = this,  ///
          combinatorVerifies = verifyCombinator(combinator, context);

    if (combinatorVerifies) {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${combinatorString}' combinator.`);
    }

    return verifies;
  }

  unifyStatement(statement, stated, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          combinatorString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

    const specifiContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specifiContext; ///

    const combinator = this, ///
          statementUnifiesWithCombinator = unifyStatementWithCombinator(statement, combinator, stated, generalContext, specifiContext);

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
