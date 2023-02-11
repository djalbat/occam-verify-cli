"use strict";

import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/node";
import { suppositionTermForVariableVerifier } from "./verifier/termForVariable/supposition";

const subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      subproofAssertionStatementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement!"),
      subproofSubDerivationLastStatementNodeQuery = nodeQuery("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");

export default class Supposition {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchSubproofNode(subproofNode, substitutions, proofContext, statementProofContext) {
    let subproofNodeMatches = false;

    const subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);

    if (subproofAssertionNode !== null) {
      const subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode),
            subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode),
            subproofStatementNodes = [
              ...subproofSuppositionStatementNodes,
              subproofSubDerivationLastStatementNode
            ],
            subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode),
            subproofStatementNodesLength = subproofStatementNodes.length,
            subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;

      if (subproofStatementNodesLength === subproofAssertionStatementNodesLength) {
        subproofNodeMatches = subproofAssertionStatementNodes.every((subproofAssertionStatementNode, index) => {
          const subproofStatementNode = subproofStatementNodes[index],
                nonTerminalNodeA = subproofAssertionStatementNode,  ///
                nonTerminalNodeB = subproofStatementNode, ///
                proofContextA = proofContext, ///
                proofContextB = statementProofContext,  ///
                nonTerminalNodeVerified = suppositionTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);

          if (nonTerminalNodeVerified) {
            return true;
          }
        });
      }
    }

    return subproofNodeMatches;
  }

  matchStatementNode(statementNode, substitutions, proofContext, statementProofContext) {
    const nonTerminalNodeA = this.statementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          proofContextA = proofContext, ///
          proofContextB = statementProofContext,  ///
          nonTerminalNodeVerified = suppositionTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB),
          statementNodeMatches = nonTerminalNodeVerified; ///

    return statementNodeMatches;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          statement = statementString, ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, context) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          supposition = new Supposition(statementNode);

    return supposition;
  }

  static fromStatementNode(statementNode) {
    const supposition = new Supposition(statementNode);

    return supposition;
  }
}
