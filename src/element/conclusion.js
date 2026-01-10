"use strict";

import Element from "../element";
import TemporaryContext from "../context/temporary";

import { define } from "../elements";
import { termsFromJSON, framesFromJSON, statementFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON } from "../utilities/json";

export  default define(class Conclusion extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  verify(context) {
    let verifies = false;

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

    const node = this.getNode(),
          conclusionString = this.getString();  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`, node);

    if (this.statement === null) {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`, node);
    } else {
      const stated = true,
            assignments = null,
            statementValidates = this.statement.validate(assignments, stated, context);

      if (statementValidates) {
        verifies = true;
      }
    }

    if (verifies) {
      this.setContext(context);

      context.debug(`...verified the '${conclusionString}' conclusion.`, node);
    }

    return verifies;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnifies;

    const conclusion = this,  ///
          statementString = statement.getString(),
          conclusionString = conclusion.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    const generalContext = this.context,  ///
          specificContext = context;  ///

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnifies;
  }

  toJSON() {
    let frames,
        terms;

    frames = this.context.getFrames();

    terms = this.context.getTerms();

    const statementJSON = statementToStatementJSON(this.statement),
          framesJSON = framesToFramesJSON(frames),
          termsJSON = termsToTermsJSON(terms);

    frames = framesJSON;  ///

    terms = termsJSON;  ///

    const statement = statementJSON,  ///
          json = {
            statement,
            frames,
            terms
          };

    return json;
  }

  static name = "Conclusion";

  static fromJSON(json, context) {
    const terms = termsFromJSON(json, context),
          frames = framesFromJSON(json, context),
          statement = statementFromJSON(json, context),
          node = null,
          string = statement.getString(),
          temporaryContext = TemporaryContext.fromTermsAndFrames(terms, frames, context);

    context = temporaryContext; ///

    const conclusion = new Conclusion(context, string, node, statement);

    return conclusion;
  }
});
