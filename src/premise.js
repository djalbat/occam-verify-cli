"use strict";

import metaLevelUnifier from "./unifier/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      subproofAssertionStatementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement!"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");

export default class Premise {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

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

  unifySubproof(subproofNodeB, substitutions, localContextA, localContextB) {
    let subproofUnified = false;

    if (this.statementNode !== null) {
      const statementNodeA = this.statementNode,
            subproofAssertionNodeA = subproofAssertionNodeQuery(statementNodeA);  ///

      if (subproofAssertionNodeA !== null) {
        const subproofAssertionStatementNodesA = subproofAssertionStatementNodesQuery(subproofAssertionNodeA),  ///
              subproofSuppositionStatementNodesB = subproofSuppositionStatementNodesQuery(subproofNodeB), ///
              subproofLastProofStepStatementNodeB = subproofLastProofStepStatementNodeQuery(subproofNodeB), ///
              subproofStatementNodesB = [
                ...subproofSuppositionStatementNodesB,
                subproofLastProofStepStatementNodeB
              ];

        subproofUnified = match(subproofAssertionStatementNodesA, subproofStatementNodesB, (subproofAssertionStatementNodeA, subproofStatementNodeB) => {
          const nodeA = subproofAssertionStatementNodeA,  ///
                nodeB = subproofStatementNodeB, ///
                unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

          if (unified) {
            return true;
          }
        });
      }
    }

    return subproofUnified;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
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
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          premise = new Premise(statementNode);

    return premise;
  }
}
