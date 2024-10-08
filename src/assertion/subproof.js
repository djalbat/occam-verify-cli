"use strict";

import shim from "../shim";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";

import { front, last, match } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      statementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion");

export default class SubproofAssertion {
  constructor(fileContext, string, statements) {
    this.fileContext = fileContext;
    this.string = string;
    this.statements = statements;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getStatements() {
    return this.statements;
  }

  unifySubproof(subproof, substitutions, localContext) {
    let subproofUnified;

    const subproofString = subproof.getString(),
          subproofStatements = subproof.getStatements(),
          subproofAssertionString = this.string;  ///

    localContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    subproofUnified = match(this.statements, subproofStatements, (statement, subproofStatement) => {
      const statementNode = statement.getNode(),
            subproofStatementNode = subproofStatement.getNode(),
            nodeA = statementNode,  ///
            nodeB = subproofStatementNode,  ///
            fileContextA = this.fileContext,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext, ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      if (unified) {
        return true;
      }
    });

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnified;
  }

  toJSON() {
    const statementStings = this.statements.map((statement) => {
            const statementString = statement.getString();

            return statementString;
          }),
          statements = statementStings, ///
          json = {
            statements
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { statements } = json;

    const statementsJSON = statements;  ///

    statements = statementsJSON.map((statementJSON) => {
      const json = statementJSON,
            statement = Statement.fromJSON(json, fileContext);

      return statement;
    });

    const string = stringFromStatements(statements),
          subproofAssertion = new SubproofAssertion(fileContext, string, statements);

    return subproofAssertion;
  }

  static fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
    let subproofAssertion = null;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

      if (subproofAssertionNode !== null) {
        const { Statement } = shim,
              localContext = LocalContext.fromFileContext(fileContext),
              statementNodes = statementNodesQuery(subproofAssertionNode),
              statements = statementNodes.map((statementNode) => {
                const statement = Statement.fromStatementNode(statementNode, localContext);

                return statement;
              }),
              string = stringFromStatements(statements);

        subproofAssertion = new SubproofAssertion(fileContext, string, statements);
      }
    }

    return subproofAssertion;
  }
}

function stringFromStatements(statements) {
  const frontStatements = front(statements),
        lastStatement = last(statements),
        frontStatementsString = statementsStringtatements(frontStatements),
        lastStatementString = lastStatement.getString(),
        string = `[${frontStatementsString}] ... ${lastStatementString}`;

  return string;
}

function statementsStringtatements(statements) {
  const statementsString = statements.reduce((statementsString, statement) => {
    const statementString = statement.getString();

    statementsString = (statementsString !== null) ?
                        `${statementsString}, ${statementString}` :
                           statementString;  ///

    return statementsString;
  }, null);

  return statementsString
}