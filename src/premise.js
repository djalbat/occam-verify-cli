"use strict";

import { nodeAsString } from "./utilities/string";
import { premiseMatcher } from "./matcher/premise";
import { premiseMetaMatcher } from "./metaMatcher/premise";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/string";

const metastatementNodesQuery = nodesQuery("/ruleSubproofAssertion/metastatement"),
      ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/ruleSubproofAssertion!"),
      premiseMetastatementNodesQuery = nodesQuery("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"),
      subDerivationStatementNodeQuery = nodeQuery("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"),
      suppositionStatementStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement!/statement!"),
      ruleSubDerivationMetastatementNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

export default class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchSubproofNode(subproofNode, substitutions) {
    let subproofNodeMatches = false;

    const subproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);

    if (subproofAssertionNode !== null) {
      const subDerivationStatementNode = subDerivationStatementNodeQuery(subproofNode),
            suppositionStatementStatementNodes = suppositionStatementStatementNodesQuery(subproofNode),
            ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(subproofAssertionNode),
            statementNodes = [
              ...suppositionStatementStatementNodes,
              subDerivationStatementNode
            ],
            statementNodesLength = statementNodes.length,
            ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;

      if (statementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every((ruleSubproofAssertionMetastatementNode, index) => {
          const statementNode = statementNodes[index],
                nonTerminalNodeB = statementNode, ///
                nonTerminalNodeA = ruleSubproofAssertionMetastatementNode,  ///
                nonTerminalNodeMatches = premiseMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

          if (nonTerminalNodeMatches) {
            return true;
          }
        });
      }
    }

    return subproofNodeMatches;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          nonTerminalNodeMatches = premiseMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchRuleSubproofNode(ruleSubproofNode, metaSubstitutions) {
    let ruleSubproofNodeMatches = false;

    const ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);

    if (ruleSubproofAssertionNode !== null) {
      const premiseMetastatementNodes = premiseMetastatementNodesQuery(ruleSubproofNode),
            ruleSubDerivationMetastatementNode = ruleSubDerivationMetastatementNodeQuery(ruleSubproofNode),
            ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode),
            metastatementNodes = [
              ...premiseMetastatementNodes,
              ruleSubDerivationMetastatementNode
            ],
            metastatementNodesLength = metastatementNodes.length,
            ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;

      if (metastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every((ruleSubproofAssertionMetastatementNode, index) => {
                                    const metastatementNode = metastatementNodes[index],
                                          nonTerminalNodeA = ruleSubproofAssertionMetastatementNode,  ///
                                          nonTerminalNodeB = metastatementNode, ///
                                          nonTerminalNodeMatches = premiseMetaMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);

                                    if (nonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return ruleSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          nonTerminalNodeMatches = premiseMetaMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions),
          metastatementNodeMatches = nonTerminalNodeMatches; ///

    return metastatementNodeMatches;
  }

  toJSON() {
    const metastatementString = nodeAsString(this.metastatementNode),
          metastatement = metastatementString, ///
          json = {
            metastatement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, releaseContext),
          premise = new Premise(metastatementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}
