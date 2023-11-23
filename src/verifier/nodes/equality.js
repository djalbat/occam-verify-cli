"use strict";

import verifyTerm from "../../verify/term";
import NodesVerifier from "../../verifier/nodes";

import { first, second } from "../../utilities/array";
import { TERM_RULE_NAME } from "../../ruleNames";
import { verifyTermAsVariable } from "../../verify/term";

class EqualityNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
          rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
      const leftNonTerminalNodeRuleNameTermRuleName = (leftNonTerminalNodeRuleName === TERM_RULE_NAME),
            rightNonTerminalNodeRuleNameTermRuleName = (rightNonTerminalNodeRuleName === TERM_RULE_NAME);

      if (leftNonTerminalNodeRuleNameTermRuleName && rightNonTerminalNodeRuleNameTermRuleName) {
        const leftTermNode = leftNonTerminalNode, ///
              rightTermNode = rightNonTerminalNode, ///
              termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead);

        nonTerminalNodeVerified = termNodeVerified;  ///
      }

      if (!nonTerminalNodeVerified) {
        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
              rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
              leftChildNodes = leftNonTerminalNodeChildNodes, ///
              rightChildNodes = rightNonTerminalNodeChildNodes, ///
              childNodesVerified = this.verifyChildNodes(leftChildNodes, rightChildNodes, equalities, context, verifyAhead);

        nonTerminalNodeVerified = childNodesVerified; ///
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead) {
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
            leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType);

      if (leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType) {
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

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
