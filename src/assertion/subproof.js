"use strict";

import { arrayUtilities } from "necessary";

import shim from "../shim";
import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";
import metaLevelVerifier from "../verifier/metaLevel";

import { nodeQuery, nodesQuery } from "../utilities/query";
import proofStep from "../proofStep";
import subproof from "../subproof";

const { front, last, match } = arrayUtilities;

const statementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion");

export default class SubproofAssertion {
  constructor(string, node, statements) {
    this.string = string;
    this.node = node;
    this.statements = statements;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getStatements() {
    return this.statements;
  }

  unifySubproof(subproof, substitutions, fileContext, localContext) {
    let subproofUnified;

    const subproofString = subproof.getString(),
          subproofAssertionString = this.string;  ///

    localContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    const subproofStatements = subproof.getStatements(),
          subproofAssertionStatements = this.statements;  ///

    subproofUnified = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
      const subproofAssertionStatementNode = subproofAssertionStatement.getNode(),
            subproofStatementNode = subproofStatement.getNode(),
            nodeA = subproofAssertionStatementNode,  ///
            nodeB = subproofStatementNode,  ///
            fileContextA = fileContext,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext, ///
            unifiedAtMetaLevel = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      if (unifiedAtMetaLevel) {
        return true;
      }
    });

    if (subproofUnified) {
      localContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnified;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const subproofAssertionString = this.string;  ///

    localContext.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`);

    let verifiedWhenStated = false,
        verifiedWhenDerived = false;

    if (stated) {
      verifiedWhenStated = this.verifyWhenStated(localContext);
    } else {
      verifiedWhenDerived = this.verifyWhenDerived(localContext);
    }

    if (verifiedWhenStated || verifiedWhenDerived) {
      assignments = null; ///

      stated = true;  ///

      const subproofAssertionNode = this.node,  ///
            verifiedAtMetaLevel = metaLevelVerifier.verify(subproofAssertionNode, assignments, stated, localContext);

      verified = verifiedAtMetaLevel; ///
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

    const proofSteps = localContext.getProofSteps();

    derivedSubproofAssertionVerified = proofSteps.some((proofStep) => {
      const subproofAssertion = this,
            subproofAssertionUnified = proofStep.unifySubproofAssertion(subproofAssertion, localContext);

      if (subproofAssertionUnified) {
        return true;
      }
    });

    if (derivedSubproofAssertionVerified) {
      localContext.debug(`...verified the '${subproofAssertionString}' derived subproof assertion.`);
    }

    return derivedSubproofAssertionVerified;
  }

  static fromStatementNode(statementNode, localContext) {
    let subproofAssertion = null;

    const subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

    if (subproofAssertionNode !== null) {
      const { Statement } = shim,
            statementNodes = statementNodesQuery(subproofAssertionNode),
            statement = Statement.fromStatementNode(statementNode, localContext),
            statementString = statement.getString(),
            statements = statementNodes.map((statementNode) => {
              const statement = Statement.fromStatementNode(statementNode, localContext);

              return statement;
            }),
            node = subproofAssertionNode, ///
            string = statementString; ///

      subproofAssertion = new SubproofAssertion(string, node, statements);
    }

    return subproofAssertion;
  }

  static fromSubproofAssertionNode(subproofAssertionNode, localContext) {
    let subproofAssertion = null;

    if (subproofAssertionNode !== null) {
      const { Statement } = shim,
            statementNodes = statementNodesQuery(subproofAssertionNode),
            statements = statementNodes.map((statementNode) => {
              const statement = Statement.fromStatementNode(statementNode, localContext);

              return statement;
            }),
            node = subproofAssertionNode, ///
            string = stringFromStatements(statements);

      subproofAssertion = new SubproofAssertion(string, node, statements);
    }

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