"use strict";

import metaLevelUnifier from "./unifier/metaLevel";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";

const unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement");

export default class Conclusion {
  constructor(unqualifiedStatement) {
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }


  unifyStatement(statementNodeB, substitutions, localContextA, localContextB) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      const nodeA = this.statementNode,  ///
            nodeB = statementNodeB,  ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      statementUnified = unified; ///
    }

    return statementUnified;
  }

  verify(localContext) {
    let verified = false;

    const conclusionString = this.getString();  ///

    localContext.trace(`Verifying the '${conclusionString}' conclusion...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

    if (unqualifiedStatementVerified) {
      verified = true;
    }

    if (verified) {
      localContext.debug(`...verified the '${conclusionString}' conclusion.`);
    }

    return verified;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          conclusion = new Conclusion(unqualifiedStatement);

    return conclusion;
  }
}
