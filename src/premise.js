"use strict";

import LocalContext from "./context/local";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import intrinsicLevelAgainstMetaLevelNodesVerifier from "./verifier/nodes/intrinsicLevelAgainstMetaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString, metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement!/statement!"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      ruleSubproofPremiseMetastatementNodesQuery = nodesQuery("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement!/metastatement!"),
      ruleSubproofLastRuleProofStepMetastatementNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation/lastRuleProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!"),
      metaSubproofLastMetaproofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetaproofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

export default class Premise {
  constructor(metastatementNode, statementNode) {
    this.metastatementNode = metastatementNode;
    this.statementnode = statementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  getStatementNode() {
    return this.statementnode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, localContext) {
    let matchesStatementNode = false;

    if (this.metastatementNode !== null) {
      const fileContextA = fileContext, ///
            nonTerminalNodeA = this.metastatementNode,  ///
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

    if (this.metastatementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

      if (subproofAssertionNode !== null) {
        const subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode),
              subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode),
              subproofStatementNodes = [
                ...subproofSuppositionStatementNodes,
                subproofLastProofStepStatementNode
              ],
              subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

        matchesSubproofNode = match(subproofAssertionMetastatementNodes, subproofStatementNodes, (subproofAssertionMetastatementNode, subproofStatementNode) => {
          const fileContextA = fileContext, ///
                nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = subproofStatementNode, ///
                localContextA = LocalContext.fromFileContext(fileContextA),
                localContextB = localContext,  ///
                nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
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

  matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localContext) {
    let matchesRuleSubproofNode = false;

    if (this.metastatementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

      if (subproofAssertionNode !== null) {
        const ruleSubproofPremiseMetastatementNodes = ruleSubproofPremiseMetastatementNodesQuery(ruleSubproofNode),
              ruleSubproofLastRuleProofStepMetastatementNode = ruleSubproofLastRuleProofStepMetastatementNodeQuery(ruleSubproofNode),
              ruleSubproofMetastatementNodes = [
                ...ruleSubproofPremiseMetastatementNodes,
                ruleSubproofLastRuleProofStepMetastatementNode
              ],
              subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

        matchesRuleSubproofNode = match(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const fileContextA = fileContext, ///
                nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
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

    return matchesRuleSubproofNode;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext) {
    let matchesMetaSubproofNode = false;

    if (this.metastatementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

      if (subproofAssertionNode !== null) {
        const metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode),
              metaSubproofLastMetaproofStepMetastatementNode = metaSubproofLastMetaproofStepMetastatementNodeQuery(metaSubproofNode),
              metaSubproofMetastatementNodes = [
                ...metaSubproofMetaSuppositionMetastatementNodes,
                metaSubproofLastMetaproofStepMetastatementNode
              ],
              subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

        matchesMetaSubproofNode = match(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const fileContextA = fileContext, ///
                nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
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

    return matchesMetaSubproofNode;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext) {
    let matchesMetastatementNode = false;

    if (this.metastatementNode !== null) {
      const fileContextA = fileContext, ///
            nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      matchesMetastatementNode = nonTerminalNodeVerified; ///
    }

    return matchesMetastatementNode;
  }

  toJSON(tokens) {
    const metastatementString = nodeAsString(this.metastatementNode, tokens),
          statementString = nodeAsString(this.statementnode, tokens),
          metastatement = metastatementString, ///
          statement = statementString,  ///
          json = {
            metastatement,
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const metastatementNode = null,
          premise = new Premise(metastatementNode, statementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          premise = new Premise(metastatementNode, statementNode);

    return premise;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement, statement } = json,
          metastatementString = metastatement,  ///
          statementString = statement, ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          premise = new Premise(metastatementNode, statementNode);

    return premise;
  }
}
