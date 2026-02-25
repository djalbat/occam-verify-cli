"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateCombinator } from "../process/instantiate";
import { verifyStatementAsCombinator } from "../process/verify";
import { unifyStatementWithCombinator } from "../process/unify";
import {
  statementFromJSON,
  ephemeralContextFromJSON,
  statementToStatementJSON,
  procedureCallToProcedureCallJSON
} from "../utilities/json";

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

  verify(context) {
    let verifies = false;

    const combinatorString = this.getString();  ///

    context.trace(`Verifying the '${combinatorString}' combinator...`);

    attempt((context) => {
      const statementVerifiesAsCombinator = verifyStatementAsCombinator(this.statement, context);

      if (statementVerifiesAsCombinator) {
        this.setContext(context);

        verifies = true;
      }
    }, context)

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
    let context;

    context = this.getContext();

    const contextJSON = context.toJSON();

    context = contextJSON;  ///

    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          string = this.getString(),
          json = {
            context,
            string,
            statement
          };

    return json;
  }

  static name = "Combinator";

  static fromJSON(json, context) {
    const combinator = literally((context) => {
      const { string } = json,
            combinatorNode = instantiateCombinator(string, context),
            node = combinatorNode,  ///
            statement = statementFromJSON(json, context),
            ephemeralContext = ephemeralContextFromJSON(json, context);

      context = ephemeralContext; ///

      const combinator = new Combinator(context, string, node, statement);

      return combinator;
    }, context);

    return combinator;
  }
});
