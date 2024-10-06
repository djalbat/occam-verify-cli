"use strict";

import shim from "../shim";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";

import { match } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const statementNodesQuery = nodesQuery("/subproofAssertion/statement"),
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

  static fromStatementNode(statementNode, fileContext) {
    let subproofAssertion = null;

    const subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

    if (subproofAssertionNode !== null) {
      const { Statement } = shim,
            node = subproofAssertionNode, ///
            string = fileContext.nodeAsString(node),
            localContext = LocalContext.fromFileContext(fileContext),
            statementNodes = statementNodesQuery(subproofAssertionNode),
            statements = statementNodes.map((statementNode) => {
              const statement = Statement.fromStatementNode(statementNode, localContext);

              return statement;
            });

      subproofAssertion = new SubproofAssertion(fileContext, string, statements);
    }

    return subproofAssertion;
  }
}