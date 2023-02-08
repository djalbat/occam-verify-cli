"use strict";

import Verifier from "../verifier";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";
import { TERM_RULE_NAME } from "../ruleNames";
import { variableNameFromVariableNode } from "../utilities/query";

const variableNodeQuery = nodeQuery('/term/variable!');

export default class TermForVariableVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameTermRuleName = (nonTerminalNodeARuleName === TERM_RULE_NAME),
            nonTerminalNodeBRuleNameTermRuleName = (nonTerminalNodeBRuleName === TERM_RULE_NAME);

      if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
        const termNodeA = nonTerminalNodeA,  ///
              termNodeB = nonTerminalNodeB,  ///
              termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions);

        if (termNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
        }
      } else {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions) {
    let termNodeVerified = false;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions);

      termNodeVerified = variableVerified; ///
    }

    return termNodeVerified;
  }

  verifyVariableNode(variableNodeB, termNodeB, substitutions) {
    let variableVerified;

    const variableNameA = variableNameFromVariableNode(variableNodeB),
          substitution = substitutions.find((substitution) => {
            const variableName = substitution.getVariableName();

            if (variableName === variableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const termNode = termNodeB, ///
            substitutionNodesVerified = substitution.matchTermNode(termNode);

      variableVerified = substitutionNodesVerified;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const variableName = variableNameA, ///
              termNode = termNodeB, ///
              termForVariableSubstitution = TermForVariableSubstitution.fromVariableNameAndTermNode(variableName, termNode),
              substitution = termForVariableSubstitution;  ///

        substitutions.push(substitution);
      }

      variableVerified = true;
    }

    return variableVerified;
  }
}
