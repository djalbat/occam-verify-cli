"use strict";

import matcher from "./matcher";
import Verifier from "./verifier";
import verifyTerm from "./verify/term";
import equalityStatementNode from "./node/statement/equality";

import { nodeQuery } from "./utilities/query";
import { first, second } from "./utilities/array";
import { TERM_RULE_NAME } from "./ruleNames";
import { EQUALITY_DEPTH } from "./constants";
import { verifyTermAsVariable } from "./verify/term";

const leftTermNodeQuery = nodeQuery("/statement/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/statement/argument[1]/term!");

export default class Equality {
  constructor(leftTermNode, rightTermNode) {
    this.leftTermNode = leftTermNode;
    this.rightTermNode = rightTermNode;
  }

  getLeftTermNode() {
    return this.leftTermNode;
  }

  getRightTermNode() {
    return this.rightTermNode;
  }

  matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
    let leftTermNodeAndRightTermNodeMatch = true;

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.rightTermNode :
                                      this.leftTermNode,  ///
            rightNonTerminalNode = leftTermNode,  ///
            nonTerminalNodeVerified = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified; ///
    }

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.leftTermNode :
                                      this.rightTermNode,  ///
            rightNonTerminalNode = rightTermNode,  ///
            nonTerminalNodeVerified = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerified; ///
    }

    return leftTermNodeAndRightTermNodeMatch;
  }

  match(equality, equalities, context) {
    let matches = false;

    const leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode();

    equalities = filterEqualities(equalities, equality);  ///

    if (!matches) {
      const reversed = false,
            leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    if (!matches) {
      const reversed = true,
            leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    return matches;
  }

  verify(equalities, context) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeVerified = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context),
          verified = nonTerminalNodeVerified; ///

    return verified;
  }

  static fromProofStep(proofStep) {
    let equality = null;

    const statementNode = proofStep.getStatementNode();

    if (statementNode !== null) {
      const nodeA = statementNode,  ///
            nodeB = equalityStatementNode,  ///
            depth = EQUALITY_DEPTH,
            nodeMatches = matcher.matchNode(nodeA, nodeB, depth);

      if (nodeMatches) {
        const leftTermNode = leftTermNodeQuery(statementNode),
              rightTermNode = rightTermNodeQuery(statementNode);

        equality = new Equality(leftTermNode, rightTermNode);
      }
    }

    return equality;
  }

  static fromStatementNode(statementNode) {
    const leftTermNode = leftTermNodeQuery(statementNode),
          rightTermNode = rightTermNodeQuery(statementNode),
          equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }

  static fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
    const equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }
}

class EqualityVerifier extends Verifier {
  verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
    let nonTerminalNodeVerified = false;

    const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
          rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
      const ruleName = leftNonTerminalNodeRuleName, ///
            ruleNameTermRuleName = (ruleName === TERM_RULE_NAME);

      if (ruleNameTermRuleName) {
        const leftTermNode = leftNonTerminalNode, ///
              rightTermNode = rightNonTerminalNode, ///
              termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context);

        nonTerminalNodeVerified = termNodeVerified;  ///
      }

      if (!nonTerminalNodeVerified) {
        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
              rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
              leftNodes = leftNonTerminalNodeChildNodes, ///
              rightNodes = rightNonTerminalNodeChildNodes, ///
              nodesVerified = this.verifyNodes(leftNodes, rightNodes, equalities, context);

        nonTerminalNodeVerified = nodesVerified; ///
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(leftTermNode, rightTermNode, equalities, context) {
    let termNodeVerified = false;

    const variables = [],
          leftTermVerifiedAsVariable = verifyTermAsVariable(leftTermNode, variables, context),
          rightTermVerifiedAsVariable = verifyTermAsVariable(rightTermNode, variables, context);

    let equality = null;

    if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
      const firstVariable = first(variables),
            secondVariable = second(variables),
            leftVariable = firstVariable, ///
            rightVariable = secondVariable, ///
            leftVariableType = leftVariable.getType(),
            rightVariableType = rightVariable.getType(),
            leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);

      if (leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
      }
    } else if (leftTermVerifiedAsVariable) {
      const types = [];

      verifyTerm(rightTermNode, types, context);

      const firstType = first(types),
            firstVariable = first(variables),
            leftVariable = firstVariable, ///
            rightTermType = firstType,  ///
            leftVariableType = leftVariable.getType(),
            leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);

      if (leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
      }
    } else if (rightTermVerifiedAsVariable) {
      const types = [];

      verifyTerm(leftTermNode, types, context);

      const firstType = first(types),
            firstVariable = first(variables),
            leftTermType = firstType,  ///
            rightVariable = firstVariable, ///
            rightVariableType = rightVariable.getType(),
            rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType.isEqualToOrSuperTypeOf(leftTermType);

      if (rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
      }
    } else {
      const types = [];

      verifyTerm(leftTermNode, types, context);

      verifyTerm(rightTermNode, types, context);

      const firstType = first(types),
            secondType = second(types),
            leftTermType = firstType, ///
            rightTermType = secondType, ///
            leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);

      if (leftTermTypeEqualToRightTermType) {
        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
      }
    }

    if (equality !== null) {
      const equalityA = equality, ///
            equalitiesB = equalities, ///
            equalityMatches = equalitiesB.some((equalityB) => { ///
              const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);

              if (equalityAMatchesEqualityB) {
                return true;
              }
            });

      termNodeVerified = equalityMatches;  ///
    }

    return termNodeVerified;
  }
}

const equalityVerifier = new EqualityVerifier();

function filterEqualities(equalities, equality) {
  const equalityA = equality; ///

  equalities = equalities.filter((equality) => {
    const equalityB = equality; ///

    if (equalityA !== equalityB) {
      return true;
    }
  });

  return equalities;
}
