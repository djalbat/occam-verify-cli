"use strict";

import LocalContext from "./context/local";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import intrinsicLevelAgainstMetaLevelNodesVerifier from "./verifier/nodes/intrinsicLevelAgainstMetaLevel";

import { match } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

const subproofAssertionNodeQuery = nodeQuery("/metastatement/subproofAssertion!"),
      ruleSubproofPremiseMetastatementQuery = nodesQuery("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"),
      subproofAssertionMetastatementNodesQuery = nodesQuery("/subproofAssertion/metastatement"),
      ruleSubproofSubDerivationLastMetastatementQuery = nodeQuery("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

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

  matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementLocalMetaContext) {
    let ruleSubproofNodeMatches = false;

    const subproofAssertionNode = subproofAssertionNodeQuery(this.metastatementNode);

    if (subproofAssertionNode !== null) {
      const ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode),
            ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode),
            ruleSubproofMetastatementNodes = [
              ...ruleSubproofPremiseMetastatement,
              ruleSubproofSubDerivationLastMetastatement
            ],
            ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length,
            subproofAssertionMetastatementNodes = subproofAssertionMetastatementNodesQuery(subproofAssertionNode),
            subproofAssertionMetastatementNodesLength = subproofAssertionMetastatementNodes.length;

      if (ruleSubproofMetastatementNodesLength === subproofAssertionMetastatementNodesLength) {
        ruleSubproofNodeMatches = match(subproofAssertionMetastatementNodes, ruleSubproofMetastatementNodes, (subproofAssertionMetastatementNode, ruleSubproofMetastatementNode) => {
          const nonTerminalNodeA = subproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = ruleSubproofMetastatementNode, ///
                fileContextA = fileContext, ///
                localContextA = LocalContext.fromFileContext(fileContextA),
                localMetaContextB = metastatementLocalMetaContext,  ///
                nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, () => {
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

  matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          fileContextA = fileContext, ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localMetaContextB = metastatementLocalMetaContext,  ///
          nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, () => {
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
