"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import intrinsicLevelNodesVerifier from "../verifier/nodes/intrinsicLevel";

import { push } from "../utilities/array";

export default function verifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementVerifiedAgainstStatement = false;

  const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions),
        transformed = termForVariableSubstitution.isTransformed(substitution);

  let substitutionsA = []; ///

  if (transformed) {
    const substitutionA = termForVariableSubstitution;  ///

    substitutionsA.push(substitutionA);
  }

  const nonTerminalNodeA = statementNodeA,  ///
        nonTerminalNodeB = statementNodeB,  ///
        nonTerminalNodeVerified = intrinsicLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutionsA, localContextA, localContextB, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (nonTerminalNodeVerified) {
    if (!transformed) {
      const substitutionB = termForVariableSubstitution,  ///
            substitutionsB = [
              substitutionB
            ];

      substitutionsA = transformSubstitutions(substitutionsA, substitutionsB);

      push(substitutions, substitutionsA);
    }

    statementVerifiedAgainstStatement = true;
  }

  return statementVerifiedAgainstStatement;
}

function transformSubstitutions(substitutionsA, substitutionsB) {
  substitutionsA = substitutionsA.map((substitutionA) => {
    const substitution = substitutionA,  ///
          substitutions = substitutionsB,
          termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions);

    substitutionA = termForVariableSubstitution; ///

    return substitutionA;
  });

  return substitutionsA;
}
