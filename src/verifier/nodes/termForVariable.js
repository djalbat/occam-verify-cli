"use strict";

import verifyTerm from "../../verify/term";
import NodesVerifier from "../../verifier/nodes";
import TermForVariableSubstitution from "../../substitution/termForVariable";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { TERM_RULE_NAME } from "../../ruleNames";
import { variableNameFromVariableNode } from "../../utilities/query";

const variableNodeQuery = nodeQuery('/term/variable!');

export default class TermForVariableNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameTermRuleName = (nonTerminalNodeARuleName === TERM_RULE_NAME),
            nonTerminalNodeBRuleNameTermRuleName = (nonTerminalNodeBRuleName === TERM_RULE_NAME);

      if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
        const termNodeA = nonTerminalNodeA,  ///
              termNodeB = nonTerminalNodeB,  ///
              termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB);

        if (termNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
        }
      } else {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions, proofContextA, proofContextB) {
    let termNodeVerified = false;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, proofContextA, proofContextB);

      termNodeVerified = variableVerified; ///
    }

    return termNodeVerified;
  }

  verifyVariableNode(variableNodeA, termNodeB, substitutions, proofContextA, proofContextB) {
    let variableVerified;

    const variableNameA = variableNameFromVariableNode(variableNodeA),
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
              proofContext = proofContextA, ///
              variable = proofContext.findVariableByVariableName(variableName);

        if (variable !== null) {
          const types = [],
                context = proofContextB, ///
                termNode = termNodeB, ///
                termVerified = verifyTerm(termNode, types, context, verifyAhead);

          if (termVerified) {
            const firstType = first(types),
                  termType = firstType,
                  variableType = variable.getType(),
                  variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);

            if (variableTypeEqualToOrSuperTypeOfTermType) {
              const termForVariableSubstitution = TermForVariableSubstitution.fromVariableNameAndTermNode(variableName, termNode),
                    substitution = termForVariableSubstitution;  ///

              substitutions.push(substitution);

              variableVerified = true;
            }
          }
        }
      }
    }

    return variableVerified;
  }
}
