"use strict";

import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { premiseStatementForMetavariableMatcher } from "./matcher/statementForMetavariable/premise";
import { metastatementNodeFromMetastatementString } from "./utilities/node";
import { premiseMetastatementForMetavariableMatcher } from "./matcher/metastatementForMetavariable/premise";

const ruleSubproofAssertionNodeQuery = nodeQuery("/metastatement/ruleSubproofAssertion!"),
      ruleSubproofPremiseMetastatementQuery = nodesQuery("/ruleSubproof/premise/unqualifiedMetastatement!/metastatement!"),
      subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement!/statement!"),
      subproofSubDerivationLastStatementNodeQuery = nodeQuery("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"),
      ruleSubproofAssertionMetastatementNodesQuery = nodesQuery("/ruleSubproofAssertion/metastatement"),
      ruleSubproofSubDerivationLastMetastatementQuery = nodeQuery("/ruleSubproof/ruleSubDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

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
      const subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode),
            subproofSubDerivationLastStatementNode = subproofSubDerivationLastStatementNodeQuery(subproofNode),
            subproofStatementNodes = [
              ...subproofSuppositionStatementNodes,
              subproofSubDerivationLastStatementNode
            ],
            ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(subproofAssertionNode),
            subproofStatementNodesLength = subproofStatementNodes.length,
            ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;

      if (subproofStatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
        subproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every((ruleSubproofAssertionMetastatementNode, index) => {
          const subproofStatementNode = subproofStatementNodes[index],
                nonTerminalNodeA = ruleSubproofAssertionMetastatementNode,  ///
                nonTerminalNodeB = subproofStatementNode, ///
                nonTerminalNodeMatches = premiseStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

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
          nonTerminalNodeMatches = premiseStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchRuleSubproofNode(ruleSubproofNode, substitutions) {
    let ruleSubproofNodeMatches = false;

    const ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(this.metastatementNode);

    if (ruleSubproofAssertionNode !== null) {
      const ruleSubproofPremiseMetastatement = ruleSubproofPremiseMetastatementQuery(ruleSubproofNode),
            ruleSubproofSubDerivationLastMetastatement = ruleSubproofSubDerivationLastMetastatementQuery(ruleSubproofNode),
            ruleSubproofMetastatementNodes = [
              ...ruleSubproofPremiseMetastatement,
              ruleSubproofSubDerivationLastMetastatement
            ],
            ruleSubproofMetastatementNodesLength = ruleSubproofMetastatementNodes.length,
            ruleSubproofAssertionMetastatementNodes = ruleSubproofAssertionMetastatementNodesQuery(ruleSubproofAssertionNode),
            ruleSubproofAssertionMetastatementNodesLength = ruleSubproofAssertionMetastatementNodes.length;

      if (ruleSubproofMetastatementNodesLength === ruleSubproofAssertionMetastatementNodesLength) {
        ruleSubproofNodeMatches = ruleSubproofAssertionMetastatementNodes.every((ruleSubproofAssertionMetastatementNode, index) => {
                                    const ruleSubproofMetastatementNode = ruleSubproofMetastatementNodes[index],
                                          nonTerminalNodeA = ruleSubproofAssertionMetastatementNode,  ///
                                          nonTerminalNodeB = ruleSubproofMetastatementNode, ///
                                          nonTerminalNodeMatches = premiseMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

                                    if (nonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return ruleSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          nonTerminalNodeMatches = premiseMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          metastatementNodeMatches = nonTerminalNodeMatches; ///

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

  static fromJSON(json, lexer, parser) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          premise = new Premise(metastatementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}
