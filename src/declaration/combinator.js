"use strict";

import Statement from "../statement";
import Combinator from "../combinator";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default class CombinatorDeclaration {
  constructor(statement) {
    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  verify(fileContext) {
    let combinatorDeclarationVerified;

    const statementString = this.statement.getString();

    fileContext.trace(`Verifying the '${statementString}' combinator declaration...`);

    const combinator = Combinator.fromStatement(this.statement),
          combinatorVerified = combinator.verify(fileContext);

    if (combinatorVerified) {
      fileContext.addCombinator(combinator);

      combinatorDeclarationVerified = true;
    }

    if (combinatorDeclarationVerified) {
      fileContext.debug(`...verified the '${statementString}' combinator declaration.`);
    }

    return combinatorDeclarationVerified;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const statementNode = statementNodeQuery(combinatorDeclarationNode),
          statement = Statement.fromStatementNode(statementNode, fileContext),
          combinatorDeclaration = new CombinatorDeclaration(statement);

    return combinatorDeclaration;
  }
}