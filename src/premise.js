"use strict";

import LocalContext from "./context/local";
import LocalMetaContext from "./context/localMeta";
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
      metaSubproofLastMetaProofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

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
    let statementNodeMatches = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = statementNode,  ///
            fileContextA = fileContext, ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      statementNodeMatches = nonTerminalNodeVerified; ///
    }

    return statementNodeMatches;
  }

  matchSubproofNode(subproofNode, substitutions, fileContext, localContext) {
    let subproofNodeMatches = false;

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

        subproofNodeMatches = match(subproofAssertionMetastatementNodes, subproofStatementNodes, (subproofAssertionMetastatementNode, subproofStatementNode) => {
          const nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = subproofStatementNode, ///
                fileContextA = fileContext, ///
                localContextA = LocalMetaContext.fromFileContext(fileContextA),
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

    return subproofNodeMatches;
  }

  matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext) {
    let ruleSubproofNodeMatches = false;

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

        ruleSubproofNodeMatches = match(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
                fileContextA = fileContext, ///
                localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
                localMetaContextB = localMetaContext,  ///
                nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
                  const verifiedAhead = true;

                  return verifiedAhead;
                });

          if (nonTerminalNodeVerified) {
            return true;
          }
        });
      }
    }

    return ruleSubproofNodeMatches;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
    let metaSubproofNodeMatches = false;

    if (this.metastatementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

      if (subproofAssertionNode !== null) {
        const metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode),
              metaSubproofLastMetaProofStepMetastatementNode = metaSubproofLastMetaProofStepMetastatementNodeQuery(metaSubproofNode),
              metaSubproofMetastatementNodes = [
                ...metaSubproofMetaSuppositionMetastatementNodes,
                metaSubproofLastMetaProofStepMetastatementNode
              ],
              subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

        metaSubproofNodeMatches = match(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
                fileContextA = fileContext, ///
                localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
                localMetaContextB = localMetaContext,  ///
                nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
                  const verifiedAhead = true;

                  return verifiedAhead;
                });

          if (nonTerminalNodeVerified) {
            return true;
          }
        });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
    let metastatementNodeMatches = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            fileContextA = fileContext, ///
            localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
            localMetaContextB = localMetaContext,  ///
            nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      metastatementNodeMatches = nonTerminalNodeVerified; ///
    }

    return metastatementNodeMatches;
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
