"use strict";

import LocalContext from "./context/local";
import LocalMetaContext from "./context/localMeta";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import intrinsicLevelAgainstMetaLevelNodesVerifier from "./verifier/nodes/intrinsicLevelAgainstMetaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      ruleSubproofPremiseMetastatementNodesQuery = nodesQuery("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"),
      metaSubproofMetaSuppositionMetastatementNodesQuery = nodesQuery("/metaSubproof/metaSupposition/unqualifiedMetastatement!/metastatement!"),
      ruleSubproofLastRuleProofStepMetastatementNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation/lastRuleProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!"),
      metaSubproofLastMetaProofStepMetastatementNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation/lastMetaProofStep/unqualifiedMetastatement|qualifiedMetastatement/metastatement!");

export default class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          fileContextA = fileContext, ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localContextB = statementLocalContext,  ///
          nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
          statementNodeMatches = nonTerminalNodeVerified; ///

    return statementNodeMatches;
  }

  matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext) {
    let ruleSubproofNodeMatches = false;

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

    return ruleSubproofNodeMatches;
  }

  matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext) {
    let metaSubproofNodeMatches = false;

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

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          fileContextA = fileContext, ///
          localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
          localMetaContextB = localMetaContext,  ///
          nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
          metastatementNodeMatches = nonTerminalNodeVerified; ///

    return metastatementNodeMatches;
  }

  toJSON(tokens) {
    const metastatementString = nodeAsString(this.metastatementNode, tokens),
          metastatement = metastatementString, ///
          json = {
            metastatement
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          premise = new Premise(metastatementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}
