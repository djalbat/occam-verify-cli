"use strict";

import LocalMetaContext from "./context/localMeta";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { statementNodeFromStatementString, metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement/metastatement!"),
      metaSubproofLastMetaProofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

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
          statementString = nodeAsString(this.statementNode, tokens),
          metastatement = metastatementString, ///
          statement = statementString, ///
          json = {
            metastatement,
            statement
          };

    return json;
  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          metaSupposition = new MetaSupposition(metastatementNode, statementNode);

    return metaSupposition;
  }

  static fromStatementNode(statementNode) {
    const metastatementNode = null,
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
