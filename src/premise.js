"use strict";

import Substitution from "./substitution";
import MetaSubstitution from "./metaSubstitution";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metavariableNameFromMetavariableNode } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/string";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME } from "./ruleNames";

const metastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion!"),
      unqualifiedStatementStatementNodesQuery = nodesQuery("/subproof/unqualifiedStatement/statement!"),
      unqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/metaSubproof/unqualifiedMetastatement/metastatement!"),
      qualifiedOrUnqualifiedStatementStatementNodeQuery = nodeQuery("/subproof/derivation|abridgedDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = nodeQuery("/metaSubproof/metaDerivation|abridgedMetaDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

export default class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchSubproofNode(subproofNode, substitutions) {
    let subproofNodeMatches = false;

    const subproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);

    if (subproofAssertionNode !== null) {
      const metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(subproofAssertionNode),
            unqualifiedStatementStatementNodes = unqualifiedStatementStatementNodesQuery(subproofNode),
            qualifiedOrUnqualifiedStatementStatementNode = qualifiedOrUnqualifiedStatementStatementNodeQuery(subproofNode),
            statementNodes = [
              ...unqualifiedStatementStatementNodes,
              qualifiedOrUnqualifiedStatementStatementNode
            ],
            statementNodesLength = statementNodes.length,
            metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;

      if (statementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
        subproofNodeMatches = metaSubproofAssertionMetastatementNodes.every((metaSubproofAssertionMetastatementNode, index) => {
          const statementNode = statementNodes[index],
                nonTerminalNode = statementNode, ///
                premiseNonTerminalNode = metaSubproofAssertionMetastatementNode,  ///
                premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);

          if (premiseNonTerminalNodeMatches) {
            return true;
          }
        });
      }
    }

    return subproofNodeMatches;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNode = statementNode,  ///
          premiseNonTerminalNode = this.metastatementNode,  ///
          premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions),
          statementNodeMatches = premiseNonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchMetaSubproofNode(metaSubproofNode, metaSubstitutions) {
    let metaSubproofNodeMatches = false;

    const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);

    if (metaSubproofAssertionNode !== null) {
      const metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode),
            unqualifiedMetastatementMetastatementNodes = unqualifiedMetastatementMetastatementNodesQuery(metaSubproofNode),
            qualifiedOrUnqualifiedMetastatementMetastatementNode = qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery(metaSubproofNode),
            metastatementNodes = [
              ...unqualifiedMetastatementMetastatementNodes,
              qualifiedOrUnqualifiedMetastatementMetastatementNode
            ],
            metastatementNodesLength = metastatementNodes.length,
            metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;

      if (metastatementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
        metaSubproofNodeMatches = metaSubproofAssertionMetastatementNodes.every((metaSubproofAssertionMetastatementNode, index) => {
                                    const metastatementNode = metastatementNodes[index],
                                          nonTerminalNode = metastatementNode, ///
                                          premiseNonTerminalNode = metaSubproofAssertionMetastatementNode,  ///
                                          premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

                                    if (premiseNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          premiseNonTerminalNode = this.metastatementNode,  ///
          premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions),
          metastatementNodeMatches = premiseNonTerminalNodeMatches; ///

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

function matchPremiseNode(premiseNode, node, substitutions) {
  let premiseNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
    ruleNodeTerminalNode = premiseNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            premiseTerminalNode = premiseNode,  ///
            premiseTerminalNodeMatches = matchPremiseTerminalNode(premiseTerminalNode, terminalNode, substitutions);

      premiseNodeMatches = premiseTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            premiseNonTerminalNode = premiseNode,  ///
            premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);

      premiseNodeMatches = premiseNonTerminalNodeMatches; ///
    }
  }

  return premiseNodeMatches;
}

function matchPremiseNodes(premiseNodes, nodes, substitutions) {
  let premiseNodesMatches = false;

  const nodesLength = nodes.length,
        premiseNodesLength = premiseNodes.length;

  if (nodesLength === premiseNodesLength) {
    premiseNodesMatches = nodes.every((node, index) => {
      const premiseNode = premiseNodes[index],
            premiseNodeMatches = matchPremiseNode(premiseNode, node, substitutions);

      if (premiseNodeMatches) {
        return true;
      }
    });
  }

  return premiseNodesMatches;
}

function matchPremiseTerminalNode(premiseTerminalNode, terminalNode, substitutions) {
  const matches = premiseTerminalNode.match(terminalNode),
        premiseTerminalNodeMatches = matches;

  return premiseTerminalNodeMatches;
}

function matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions) {
  let premiseNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        childNodes = nonTerminalNode.getChildNodes(),
        premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(),
        premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(),
        ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME),
        premiseNonTerminalNodeRuleNameMetastatementRuleName = (premiseNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

  if (ruleNameStatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
    const statementNode = nonTerminalNode,  ///
          premiseMetastatementNode = premiseNonTerminalNode,  ///
          premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions);

    if (premiseMetastatementNodeMatches) {
      premiseNonTerminalNodeMatches = true;
    } else {
      const nodes = childNodes, ///
            premiseNodes = premiseNonTerminalNodeChildNodes, ///
            premiseNonTerminalNodeChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, substitutions);

      premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
    }
  } else if (ruleName === premiseNonTerminalNodeRuleName) {
    const nodes = childNodes, ///
          premiseNodes = premiseNonTerminalNodeChildNodes, ///
          premiseNonTerminalNodeChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, substitutions);

    premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
  }

  return premiseNonTerminalNodeMatches;
}

function matchPremiseMetavariableNode(premiseMetavariableNode, statementNode, substitutions) {
  let premiseMetavariableNodeMatches;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        substitution = substitutions.find((substitution) => {
          const metavariableName = substitution.getMetavariableName();

          if (metavariableName === premiseMetavariableName) {
            return true;
          }
        }) || null;

  if (substitution !== null) {
    const substitutionNodesMatch = substitution.matchStatementNode(statementNode);

    premiseMetavariableNodeMatches = substitutionNodesMatch;  ///
  } else {
    const metavariableName = premiseMetavariableName, ///
          substitution = Substitution.fromMetavariableNameAndStatementNode(metavariableName, statementNode);

    substitutions.push(substitution);

    premiseMetavariableNodeMatches = true;
  }

  return premiseMetavariableNodeMatches;
}

function matchPremiseMetastatementNode(premiseMetastatementNode, statementNode, substitutions) {
  let premiseMetastatementNodeMatches = false;

  const premiseNonTerminalNode = premiseMetastatementNode,  ///
        premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(),
        premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;

  if (premiseNonTerminalNodeChildNodesLength === 1) {
    const firstPremiseChildNode = first(premiseNonTerminalNodeChildNodes),
          premiseChildNode = firstPremiseChildNode,  ///
          premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();

    if (premiseChildNodeNonTerminalNode) {
      const premiseNonTerminalChildNode = premiseChildNode,  ///
            premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(),
            premiseNonTerminalChildNodeRuleNameMetavariableRuleName = (premiseNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const premiseMetavariableNode = premiseNonTerminalChildNode,  ///
              premiseMetaVariableNodeMatches = matchPremiseMetavariableNode(premiseMetavariableNode, statementNode, substitutions);

        premiseMetastatementNodeMatches = premiseMetaVariableNodeMatches; ///
      }
    }
  }

  return premiseMetastatementNodeMatches;
}

function metaMatchPremiseNode(premiseNode, node, metaSubstitutions) {
  let premiseNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = premiseNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            premiseTerminalNode = premiseNode,  ///
            premiseTerminalNodeMatches = metaMatchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions);

      premiseNodeMatches = premiseTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            premiseNonTerminalNode = premiseNode,  ///
            premiseNonTerminalNodeMatches = metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

      premiseNodeMatches = premiseNonTerminalNodeMatches; ///
    }
  }

  return premiseNodeMatches;
}

function metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions) {
  let premiseNodesMatches = false;

  const nodesLength = nodes.length,
        premiseNodesLength = premiseNodes.length;

  if (nodesLength === premiseNodesLength) {
    premiseNodesMatches = nodes.every((node, index) => {
      const premiseNode = premiseNodes[index],
            premiseNodeMatches = metaMatchPremiseNode(premiseNode, node, metaSubstitutions);

      if (premiseNodeMatches) {
        return true;
      }
    });
  }

  return premiseNodesMatches;
}

function metaMatchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
  const matches = premiseTerminalNode.match(terminalNode),
        premiseTerminalNodeMatches = matches;

  return premiseTerminalNodeMatches;
}

function metaMatchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let premiseNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(),
        ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME),
        premiseNonTerminalNodeRuleNameMetastatementRuleName = (premiseNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

  if (ruleNameMetastatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
    const metastatementNode = nonTerminalNode,  ///
          premiseMetastatementNode = premiseNonTerminalNode,  ///
          premiseMetastatementNodeMatches = metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);

    premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
  } else if (ruleName === premiseNonTerminalNodeRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), ///
          nodes = childNodes, ///
          premiseNodes = premiseNonTerminalNodeChildNodes, ///
          premiseNonTerminalNodeChildNodesMatches = metaMatchPremiseNodes(premiseNodes, nodes, metaSubstitutions);

    premiseNonTerminalNodeMatches = premiseNonTerminalNodeChildNodesMatches; ///
  }

  return premiseNonTerminalNodeMatches;
}

function metaMatchPremiseMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions) {
  let premiseMetavariableNodeMatches;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === premiseMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);

    premiseMetavariableNodeMatches = metaSubstitutionNodesMatch;  ///
  } else {
    const metavariableName = premiseMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode);

    metaSubstitutions.push(metaSubstitution);

    premiseMetavariableNodeMatches = true;
  }

  return premiseMetavariableNodeMatches;
}

function metaMatchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
  let premiseMetastatementNodeMatches = false;

  const premiseNonTerminalNode = premiseMetastatementNode,  ///
        premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(),
        premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;

  if (premiseNonTerminalNodeChildNodesLength === 1) {
    const firstPremiseChildNode = first(premiseNonTerminalNodeChildNodes),
          premiseChildNode = firstPremiseChildNode,  ///
          premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();

    if (premiseChildNodeNonTerminalNode) {
      const premiseNonTerminalChildNode = premiseChildNode,  ///
            premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(),
            premiseNonTerminalChildNodeRuleNameMetavariableRuleName = (premiseNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const premiseMetavariableNode = premiseNonTerminalChildNode,  ///
              premiseMetaVariableNodeMatches = metaMatchPremiseMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions);

        premiseMetastatementNodeMatches = premiseMetaVariableNodeMatches; ///
      }
    }
  }

  return premiseMetastatementNodeMatches;
}
