"use strict";

import LocalContext from "./context/local";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import intrinsicLevelAgainstMetaLevelNodesVerifier from "./verifier/nodes/intrinsicLevelAgainstMetaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      subproofPremiseStatementNodesQuery = nodesQuery("/subproof/premise/unqualifiedStatement!/statement!"),
      subproofAssertionStatementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");

export default class Premise {
  constructor(statementNode) {
    this.statementnode = statementNode;
  }

  getStatementNode() {
    return this.statementnode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, localContext) {
    let matchesStatementNode = false;

    if (this.statementNode !== null) {
      const fileContextA = fileContext, ///
            nonTerminalNodeA = this.statementNode,  ///
            nonTerminalNodeB = statementNode,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      matchesStatementNode = nonTerminalNodeVerified; ///
    }

    return matchesStatementNode;
  }

  matchSubproofNode(subproofNode, substitutions, fileContext, localContext) {
    let matchesSubproofNode = false;

    if (this.statementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);

      if (subproofAssertionNode !== null) {
        const subproofPremiseStatementNodes = subproofPremiseStatementNodesQuery(subproofNode),
              subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode),
              subproofStatementNodes = [
                ...subproofPremiseStatementNodes,
                subproofLastProofStepStatementNode
              ],
              subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode);

        matchesSubproofNode = match(subproofAssertionStatementNodes, subproofStatementNodes, (subproofAssertionStatementNode, subproofStatementNode) => {
          const fileContextA = fileContext, ///
                nonTerminalNodeA = subproofAssertionStatementNode,  ///
                nonTerminalNodeB = subproofStatementNode, ///
                localContextA = LocalContext.fromFileContext(fileContextA),
                localContextB = localContext,  ///
                nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
                  const verifiedAhead = true;

                  return verifiedAhead;
                });

          if (nonTerminalNodeVerified) {
            return true;
          }
        });
      }
    }

    return matchesSubproofNode;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementnode, tokens),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const premise = new Premise(statementNode);

    return premise;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { statement } = json,
          statementString = statement, ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          premise = new Premise(statementNode, statementNode);

    return premise;
  }
}
