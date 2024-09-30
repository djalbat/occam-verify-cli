"use strict";

import shim from "./shim";
import unifyMixins from "./mixins/unify";
import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { statementNodeFromStatementString } from "./utilities/node";
import { unifyWithCombinators, unifyWithBracketedCombinator } from "./mixins/unify";
import { verifyAsMetavariable,
         verifyAsEquality,
         verifyAsFrame,
         verifyAsJudgement,
         verifyAsDeclaration,
         verifyAsTypeAssertion,
         verifyAsDefinedAssertion,
         verifyAsSubproofAssertion,
         verifyAsContainedAssertion } from "./mixins/verify";

const unifyFunctions = [
        unifyWithBracketedCombinator,
        unifyWithCombinators
      ],
      verifyFunctions = [
        verifyAsMetavariable,
        verifyAsEquality,
        verifyAsFrame,
        verifyAsJudgement,
        verifyAsDeclaration,
        verifyAsTypeAssertion,
        verifyAsDefinedAssertion,
        verifyAsSubproofAssertion,
        verifyAsContainedAssertion
      ];

class Statement {
  constructor(string, node) {
    this.string = string;
    this.node = node;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  unify(assignments, stated, localContext) {
    let unified;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Unifying the '${statementString}' statement...`);

    unified = unifyFunctions.some((unifyFunction) => {
      const unified = unifyFunction(statement, assignments, stated, localContext);

      if (unified) {
        return true;
      }
    });

    if (unified) {
      localContext.debug(`...unified the '${statementString}' statement.`);
    }

    return unified;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const statement = this, ///
          statementString = this.string;  ///

    localContext.trace(`Verifying the '${statementString}' statement...`);

    verified = verifyFunctions.some((verifyFunction) => {
      const verified = verifyFunction(statement, assignments, stated, localContext);

      if (verified) {
        return true;
      }
    });

    if (verified) {
      localContext.debug(`...verified the '${statementString}' statement.`);
    }

    return verified;
  }

  verifyAsCombinator(fileContext) {
    let verifiedAsCombinator;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement as a combinator...`);

    verifiedAsCombinator = statementAsCombinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedAsCombinator) {
      fileContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
    }

    return verifiedAsCombinator;
  }

  toJSON(fileContext) {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          statementString = string, ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          node = statementNode,  ///
          statement = new Statement(string, node);

    return statement;
  }

  static fromStatementNode(statementNode, fileContext) {
    const node = statementNode, ///
          string = fileContext.nodeAsString(node),
          statement = new Statement(string, node);

    return statement;
  }
}

Object.assign(shim, {
  Statement
});

Object.assign(Statement.prototype, unifyMixins);

export default Statement;

