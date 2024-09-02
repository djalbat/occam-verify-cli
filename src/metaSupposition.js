"use strict";

import MetaLevelLocalContext from "./context/local/metaLevel";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString, metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"),
      metaSubproofLastMetpProofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetpProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

export default class MetaSupposition {
  constructor(metastatementNode, statementNode) {
    this.metastatementNode = metastatementNode;
    this.statementNode = statementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext) {
    let matchesMetaSubproofNode = false;

    if (this.metastatementNode !== null) {
      const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

      if (subproofAssertionNode !== null) {
        const metaSubproofMetaSuppositionMetastatementNodes = metaSubproofMetaSuppositionMetastatementNodesQuery(metaSubproofNode),
              metaSubproofLastMetpProofStepMetastatementNode = metaSubproofLastMetpProofStepMetastatementNodeQuery(metaSubproofNode),
              metaSubproofMetastatementNodes = [
                ...metaSubproofMetaSuppositionMetastatementNodes,
                metaSubproofLastMetpProofStepMetastatementNode
              ],
              subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode);

        matchesMetaSubproofNode = match(subproofAssertionMetastatementNodes, metaSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const metaLevelLocalContext = MetaLevelLocalContext.fromFileContext(fileContext),
                nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
                localContextA = metaLevelLocalContext,  ///
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
      const metaLevelLocalContext = MetaLevelLocalContext.fromFileContext(fileContext),
            nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            localContextA = metaLevelLocalContext,  ///
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
          statementString = nodeAsString(this.statementNode, tokens),
          metastatement = metastatementString, ///
          statement = statementString, ///
          json = {
            metastatement,
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const metastatementNode = null,
          metaSupposition = new MetaSupposition(metastatementNode, statementNode);

    return metaSupposition;
  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          metaSupposition = new MetaSupposition(metastatementNode, statementNode);

    return metaSupposition;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement, statement } = json,
          metastatementString = metastatement,  ///
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          metaSupposition = new MetaSupposition(metastatementNode, statementNode);

    return metaSupposition;
  }
}
