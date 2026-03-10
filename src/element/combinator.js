"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateCombinator } from "../process/instantiate";
import { unifyStatementWithCombinator } from "../process/unify";
import { validateStatementAsCombinator } from "../process/validate";
import { ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../utilities/json";

export default define(class Combinator extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

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

  validate(context) {
    let validates = false;

    const combinatorString = this.getString();  ///

    context.trace(`Validating the '${combinatorString}' combinator...`);

    attempt((context) => {
      const statementValidates = this.validateStatement(context);

      if (statementValidates) {
        this.setContext(context);

        validates = true;
      }
    }, context)

    if (validates) {
      context.debug(`...validated the '${combinatorString}' combinator.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const statementString = this.statement.getString(),
          combinatorString = this.getString();  ///

    context.trace(`Validating the '${combinatorString}' combinator's '${statementString}' statement...`);

    const statementValidatesAsCombinator = validateStatementAsCombinator(this.statement, context);

    if (statementValidatesAsCombinator) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${combinatorString}' combinator's '${statementString}' statement.`);
    }

    return statementValidates;
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

    const ephemeralContext = context, ///
          ephemeralContextJSON = ephemeralContextToEphemeralContextJSON(ephemeralContext),
          contextJSON = ephemeralContextJSON; ///

    context = contextJSON;  ///

    const string = this.getString(),
          json = {
            context,
            string
          };

    return json;
  }

  static name = "Combinator";

  static fromJSON(json, context) {
    const ephemeralContext = ephemeralContextFromJSON(json, context);

    context = ephemeralContext; ///

    const combinator = literally((context) => {
      const { string } = json,
            combinatorNode = instantiateCombinator(string, context),
            node = combinatorNode,  ///
            statement = statementFromCombinatorNode(combinatorNode, context),
            combinator = new Combinator(context, string, node, statement);

      return combinator;
    }, context);

    return combinator;
  }
});

function statementFromCombinatorNode(combinatorNode, context) {
  const statementNode = combinatorNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
