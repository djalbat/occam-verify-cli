"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateCombinator } from "../process/instantiate";
import { statementFromCombinatorNode } from "../utilities/element";
import { unifyStatementWithCombinator } from "../process/unify";
import { validateStatementAsCombinator } from "../process/validate";
import { attempt, serialise, unserialise, instantiate } from "../utilities/context";

export default define(class Combinator extends Element {
  constructor(context, string, node, lineIndex, statement) {
    super(context, string, node, lineIndex);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getCombinatoryNode() {
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
        validates = true;
      }

      if (validates) {
        context.commit(this);
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

  unifyStatement(statement, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          combinatorString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

    const specifiContext = context; ///

    context = this.getContext();

    const generalContext = context; ///

    context = specifiContext; ///

    const combinator = this, ///
          statementUnifiesWithCombinator = unifyStatementWithCombinator(statement, combinator, generalContext, specifiContext);

    statementUnifies = statementUnifiesWithCombinator; ///

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
    }

    return statementUnifies;
  }

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            lineIndex = this.getLineIndex(),
            json = {
              context,
              string,
              lineIndex
            };

      return json;
    }, context);
  }

  static name = "Combinator";

  static fromJSON(json, context) {
    let combinator;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string, lineIndex } = json,
              combinatorNode = instantiateCombinator(string, context),
              node = combinatorNode,  ///
              statement = statementFromCombinatorNode(combinatorNode, context);

        combinator = new Combinator(context, string, node, lineIndex, statement);
      }, context);
    }, json, context);

    return combinator;
  }
});
