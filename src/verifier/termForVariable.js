"use strict";

import Verifier from "../verifier";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";
import { TERM_RULE_NAME } from "../ruleNames";
import { variableNameFromVariableNode } from "../utilities/query";

const variableNodeQuery = nodeQuery('/term/variable!');

export default class TermForVariableVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameTermRuleName = (nonTerminalNodeARuleName === TERM_RULE_NAME),
            nonTerminalNodeBRuleNameTermRuleName = (nonTerminalNodeBRuleName === TERM_RULE_NAME);

      if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
        const termNodeA = nonTerminalNodeA,  ///
              termNodeB = nonTerminalNodeB,  ///
              termNodeVerifies = this.verifyTermNode(termNodeA, termNodeB, substitutions);

        if (termNodeVerifies) {
          nonTerminalNodeVerifies = true;  ///
        } else {
          nonTerminalNodeVerifies = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
        }
      } else {
        nonTerminalNodeVerifies = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    }

    return nonTerminalNodeVerifies;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions) {
    let termNodeVerifies = false;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableVerifies = this.verifyVariableNode(variableNodeA, termNodeB, substitutions);

      termNodeVerifies = variableVerifies; ///
    }

    return termNodeVerifies;
  }

  verifyVariableNode(variableNodeB, termNodeB, substitutions) {
    let variableVerifies;

    const variableNameA = variableNameFromVariableNode(variableNodeB),
          substitution = substitutions.find((substitution) => {
            const variableName = substitution.getVariableName();

            if (variableName === variableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const termNode = termNodeB, ///
            substitutionNodesVerifies = substitution.verifyTermNode(termNode);

      variableVerifies = substitutionNodesVerifies;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const variableName = variableNameA, ///
              termNode = termNodeB, ///
              termForVariableSubstitution = TermForVariableSubstitution.fromVariableNameAndTermNode(variableName, termNode),
              substitution = termForVariableSubstitution;  ///

        substitutions.push(substitution);
      }

      variableVerifies = true;
    }

    return variableVerifies;
  }
}
