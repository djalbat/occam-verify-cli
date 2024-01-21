"use strict";

import verifyTerm from "../../verify/term";
import NodesVerifier from "../../verifier/nodes";
import TermForVariableSubstitution from "../../substitution/termForVariable";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { TERM_RULE_NAME } from "../../ruleNames";

const variableNodeQuery = nodeQuery('/term/variable!');

class TermForVariableNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameTermRuleName = (nonTerminalNodeARuleName === TERM_RULE_NAME),
            nonTerminalNodeBRuleNameTermRuleName = (nonTerminalNodeBRuleName === TERM_RULE_NAME);

      if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
        const termNodeA = nonTerminalNodeA,  ///
              termNodeB = nonTerminalNodeB,  ///
              termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

        if (termNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
        }
      } else {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termNodeVerified = false;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

      termNodeVerified = variableVerified; ///
    }

    return termNodeVerified;
  }

  verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let variableVerified = false;

    const substitution = substitutions.find((substitution) => {
            const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);

            if (substitutionMatchesVariableNodeA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const termNode = termNodeB, ///
            substitutionNodesVerified = substitution.matchTermNode(termNode);

      if (substitutionNodesVerified) {
        const verifiedAhead = verifyAhead();

        variableVerified = verifiedAhead;  ///
      }
    } else {
      const variableNode = variableNodeA, ///
            localContext = localContextA, ///
            variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const terms = [],
              context = localContextB, ///
              termNode = termNodeB, ///
              termVerified = verifyTerm(termNode, terms, context, () => {
                let verifiedAhead = false;

                const firstTerm = first(terms),
                      term = firstTerm, ///
                      termType = term.getType(),
                      variableType = variable.getType(),
                      variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);

                if (variableTypeEqualToOrSuperTypeOfTermType) {
                  const termForVariableSubstitution = TermForVariableSubstitution.fromVariableNodeAndTermNode(variableNode, termNode),
                        substitution = termForVariableSubstitution;  ///

                  substitutions.push(substitution);

                  verifiedAhead = verifyAhead();

                  if (!verifiedAhead) {
                    substitutions.pop();
                  }
                }

                return verifiedAhead;
              });

        variableVerified = termVerified;  ///
      }
    }

    return variableVerified;
  }
}

const termForVariableNodesVerifier = new TermForVariableNodesVerifier();

export default termForVariableNodesVerifier;
