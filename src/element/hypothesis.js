"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateHypothesis } from "../process/instantiate";
import { statementFromHypothesisNode } from "../utilities/element";
import { declare, attempt, serialise, unserialise, instantiate } from "../utilities/context";

export default define(class Hypothesis extends Element {
  constructor(context, string, node, lineIndex, statement) {
    super(context, string, node, lineIndex);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getHypothesisNode() {
    const node = this.getNode(),
          hypothesisNode = node;  ///

    return hypothesisNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const hypothesisString = this.getString(); ///

    context.trace(`Verifying the '${hypothesisString}' hypothesis...`);

    if (this.statement !== null) {
      const validates = this.validate(context);

      if (validates) {
        verifies = true;
      }
    } else {
      context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${hypothesisString}' hypothesis.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const hypothesisString = this.getString(); ///

    context.trace(`Validating the '${hypothesisString}' hypothesis...`);

    declare((context) => {
      attempt((context) => {
        const statementValidates = this.validateStatement(context);

        if (statementValidates) {
          validates = true;
        }

        if (validates) {
          this.commit(context);
        }
      }, context);
    }, context)

    if (validates) {
      context.debug(`...validated the '${hypothesisString}' hypothesis.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const hypothesisString = this.getString();

    context.trace(`Validating the '${hypothesisString}' hypothesis's statement... `);

    const statement = this.statement.validate(context);  ///

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${hypothesisString}' hypothesis's statement. `);
    }

    return statementValidates;
  }

  static name = "Hypothesis";

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

  static fromJSON(json, context) {
    let hypothesis;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string, lineIndex } = json,
              hypothesisNode = instantiateHypothesis(string, context),
              node = hypothesisNode,  ///
              statement = statementFromHypothesisNode(hypothesisNode, context);

        hypothesis = new Hypothesis(context, string, node, lineIndex, statement);
      }, context);
    }, json, context);

    return hypothesis;
  }
});
