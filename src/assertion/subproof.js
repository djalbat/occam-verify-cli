"use strict";

import shim from "../shim";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";
import metaLevelVerifier from "../verifier/metaLevel";

import { front, last, match } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const statementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion");

export default class SubproofAssertion {
  constructor(string, statements) {
    this.string = string;
    this.statements = statements;
  }

  getString() {
    return this.string;
  }

  getStatements() {
    return this.statements;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const subproofAssertionString = this.string;  ///

    localContext.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`);

    let verifiedWhenStated = false,
        verifiedWhenDerived = false;

    if (stated) {
      verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
    } else {
      verifiedWhenDerived = this.verifyWhenDerived(localContext);
    }

    if (verifiedWhenStated || verifiedWhenDerived) {
      assignments = null; ///

      stated = true;  ///

      const subproofAssertionNode = this.node;  ///

      verified = metaLevelVerifier.verify(subproofAssertionNode, assignments, stated, localContext);
    }

    if (verified) {
      localContext.debug(`...verified the '${subproofAssertionString}' subproof assertion.`);
    }

    return verified;
  }

  verifyWhenStated(localContext) {
    let verifiedWhenStated;

    const subproofAssertionString = this.string;  ///

    localContext.trace(`Verifying the '${subproofAssertionString}' stated subproof assertion...`);

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${subproofAssertionString}' stated subproof assertion.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(localContext) {
    let derivedSubproofAssertionVerified;

    const subproofAssertionString = this.string;  ///

    localContext.trace(`Verifying the '${subproofAssertionString}' derived subproof assertion...`);

    derivedSubproofAssertionVerified = false;

    localContext.debug(`The '${subproofAssertionString}' derived subproof assertion cannot be verified.`);

    return derivedSubproofAssertionVerified;
  }

  unifySubproof(subproof, substitutions, fileContext, localContext) {
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
            fileContextA = fileContext,  ///
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

  static fromStatement(statement, fileContext) {
    let subproofAssertion = null;

    const statementNode = statement.getNode(),
          subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

    if (subproofAssertionNode !== null) {
      const { Statement } = shim,
            statementNodes = statementNodesQuery(subproofAssertionNode),
            statementString = statement.getString(),
            localContext = LocalContext.fromFileContext(fileContext),
            statements = statementNodes.map((statementNode) => {
              const statement = Statement.fromStatementNode(statementNode, localContext);

              return statement;
            }),
            string = statementString; ///

      subproofAssertion = new SubproofAssertion(string, statements);
    }

    return subproofAssertion;
  }

  static fromSubproofAssertionNode(subproofAssertionNode, localContext) {
    const { Statement } = shim,
          statementNodes = statementNodesQuery(subproofAssertionNode),
          statements = statementNodes.map((statementNode) => {
            const statement = Statement.fromStatementNode(statementNode, localContext);

            return statement;
          }),
          string = stringFromStatements(statements),
          subproofAssertion = new SubproofAssertion(string, statements);

    return subproofAssertion;
  }
}

function stringFromStatements(statements) {
  const frontStatements = front(statements),
        lastStatement = last(statements),
        frontStatementsString = statementsStringFromStatements(frontStatements),
        lastStatementString = lastStatement.getString(),
        string = `[${frontStatementsString}] ... ${lastStatementString}`;

  return string;
}

function statementsStringFromStatements(statements) {
  const statementsString = statements.reduce((statementsString, statement) => {
    const statementString = statement.getString();

    statementsString = (statementsString !== null) ?
                        `${statementsString}, ${statementString}` :
                           statementString;  ///

    return statementsString;
  }, null);

  return statementsString
}