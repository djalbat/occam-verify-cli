"use strict";

import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { premiseStatementForMetavariableVerifier } from "./verifier/statementForMetavariable/premise";
import { metastatementNodeFromMetastatementString } from "./utilities/node";
import { premiseMetastatementForMetavariableVerifier } from "./verifier/metastatementForMetavariable/premise";

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
                nonTerminalNodeVerifies = premiseStatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

          if (nonTerminalNodeVerifies) {
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
          nonTerminalNodeVerifies = premiseStatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeVerifies; ///

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
                                          nonTerminalNodeVerifies = premiseMetastatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

                                    if (nonTerminalNodeVerifies) {
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
          nonTerminalNodeVerifies = premiseMetastatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          metastatementNodeMatches = nonTerminalNodeVerifies; ///

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

  static fromJSON(json, context) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = context.getLexer(),
          parser = context.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          premise = new Premise(metastatementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}
