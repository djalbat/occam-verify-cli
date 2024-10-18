"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
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

