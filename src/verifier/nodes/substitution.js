"use strict";

import NodesVerifier from "../../verifier/nodes";

import TermForVariableSubstitution from "../../substitution/termForVariable";

import { nodeQuery } from "../../utilities/query";
import { TERM_RULE_NAME } from "../../ruleNames";

const variableNodeQuery = nodeQuery("/term/variable");

class SubstitutionNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const ruleName = nonTerminalNodeARuleName;  ///

      switch (ruleName) {
        case TERM_RULE_NAME: {
          const termNodeA = nonTerminalNodeA, ///
                termNodeB = nonTerminalNodeB, ///
                termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = termNodeVerified; ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termNodeVerified;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableNodeVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

      termNodeVerified = variableNodeVerified; ///
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB, ///
            nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

      termNodeVerified = nonTerminalNodeVerified; ///
    }

    return termNodeVerified;
  }

  verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let variableNodeVerified = false;

    if (variableNodeVerified === false) {
      const variableNodeB = variableNodeQuery(termNodeB);

      if (variableNodeB !== null) {
        const variableNodeAMatchedVariableNodeB = variableNodeA.match(variableNodeB);

        if (variableNodeAMatchedVariableNodeB) {
          const verifiedAhead = verifyAhead();

          variableNodeVerified = verifiedAhead; ///
        }
      }
    }

    if (variableNodeVerified === false) {
      const variableNode = variableNodeA,
            substitution = substitutions.find((substitution) => {
              const matches = substitution.matchVariableNode(variableNode);

              if (matches) {
                return true;
              }
            }) || null;

      if (substitution !== null) {
        const termNode = termNodeB, ///
              termNodeMatches = substitution.matchTermNode(termNode);

        if (termNodeMatches) {
          const verifiedAhead = verifyAhead();

          variableNodeVerified = verifiedAhead;  ///
        }
      } else {
        let verifiedAhead;

        const termNode = termNodeB, ///
              termForVariableSubstitution = TermForVariableSubstitution.fromVariableNodeAndTermNode(variableNode, termNode),
              substitution = termForVariableSubstitution; ///

        substitutions.push(substitution);

        verifiedAhead = verifyAhead();

        if (!verifiedAhead) {
          substitutions.pop();
        }

        variableNodeVerified = verifiedAhead; ///
      }
    }

    return variableNodeVerified;
  }
}

const substitutionNodesVerifier = new SubstitutionNodesVerifier();

export default substitutionNodesVerifier;
