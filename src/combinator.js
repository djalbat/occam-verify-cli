"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default class Combinator {
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

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel;

    const combinatorString = this.getString(); ///

    fileContext.trace(`Verifying the '${combinatorString}' combinator at top level...`);

    const statementVerifiedAtTopLevel = this.statement.verifyAtTopLevel(fileContext);

    verifiedAtTopLevel = statementVerifiedAtTopLevel; ///

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${combinatorString}' combinator at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const statementJSON = this.statement.toJSON(),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { statement } = json;

    const string = statement;  ///

    json = {  ///
      string
    };

    const { Statement } = shim;

    statement = Statement.fromJSON(json, fileContext);

    const combinator = new Combinator(statement);

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
