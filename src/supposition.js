"use strict";

import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      subproofAssertionStatementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement!"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");

export default class Supposition {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, localContext) {
    let matchesStatementNode = false;

    if (this.statementNode !== null) {
      const nodeA = this.statementNode,  ///
            nodeB = statementNode,  ///
            fileContextA = fileContext, ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      matchesStatementNode = unified; ///
    }

    return matchesStatementNode;
  }

  matchSubproofNode(subproofNode, substitutions, fileContext, localContext) {
    let matchesSubproofNode = false;

    if (this.statementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);

      if (subproofAssertionNode !== null) {
        const subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode),
              subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode),
              subproofStatementNodes = [
                ...subproofSuppositionStatementNodes,
                subproofLastProofStepStatementNode
              ],
              subproofAssertionStatementNodes = subproofAssertionStatementNodesQuery(subproofAssertionNode);

        matchesSubproofNode = match(subproofAssertionStatementNodes, subproofStatementNodes, (subproofAssertionStatementNode, subproofStatementNode) => {
          const nodeA = subproofAssertionStatementNode,  ///
                nodeB = subproofStatementNode, ///
                fileContextA = fileContext, ///
                localContextA = LocalContext.fromFileContext(fileContextA),
                localContextB = localContext,  ///
                unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

          if (unified) {
            return true;
          }
        });
      }
    }

    return matchesSubproofNode;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          statement = statementString, ///
          json = {
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const supposition = new Supposition(statementNode);

    return supposition;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          supposition = new Supposition(statementNode);

    return supposition;
  }
}
