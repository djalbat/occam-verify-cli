"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { unifyStatementWithCombinator } from "./utilities/unification";
import { statementFromJSON, statementToStatementJSON } from "./utilities/json";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

class Combinator {
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

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared;

    const combinatorString = this.getString(); ///

    fileContext.trace(`Verifying the '${combinatorString}' combinator when declared...`);

    const statementVerifiedAtTopLevel = this.statement.verifyWhenDeclared(fileContext);

    verifiedWhenDeclared = statementVerifiedAtTopLevel; ///

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${combinatorString}' combinator when declared.`);
    }

    return verifiedWhenDeclared;
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
    const { Statement } = shim,
          statementNode = statementNodeQuery(combinatorDeclarationNode),
          localContext = LocalContext.fromFileContext(fileContext),
          statement = Statement.fromStatementNode(statementNode, localContext),
          combinator = new Combinator(statement);

    return combinator;
  }
}

Object.assign(shim, {
  Combinator
});

export default Combinator;

