"use strict";

import ontology from "../ontology";
import TemporaryContext from "../context/temporary";

import { define } from "../ontology";
import { termsFromJSON, framesFromJSON, statementFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON } from "../utilities/json";

export  default define(class Conclusion {
  constructor(context, node, string, statement) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.statement = statement;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  verify(context) {
    let verifies = false;

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

    const conclusionString = this.string;  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`, this.node);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerifies = this.statement.verify(assignments, stated, context);

      verifies = statementVerifies; ///

    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`, this.node);
    }

    if (verifies) {
      this.context = context;

      context.debug(`...verified the '${conclusionString}' conclusion.`, this.node);
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

    const conclusion = new Conclusion(context, node, string, statement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, context) {
    const { Statement } = ontology,
          node = conclusionNode,  ///
          string = context.nodeAsString(node),
          statement = Statement.fromConclusionNode(conclusionNode, context),
          temporaryContext = null;

    context = temporaryContext; ///

    const conclusion = new Conclusion(context, node, string, statement);

    return conclusion;
  }
});
