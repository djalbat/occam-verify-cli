"use strict";

import metaLevelUnifier from "../unifier/metaLevel";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { push } from "../utilities/array";

export default function unifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementUnifiedAgainstStatement = false;

  const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions),
        transformed = termForVariableSubstitution.isTransformed(substitution);

  let substitutionsA = []; ///

  if (transformed) {
    const substitutionA = termForVariableSubstitution;  ///

    substitutionsA.push(substitutionA);
  }

  const nonTerminalNodeA = statementNodeA,  ///
        nonTerminalNodeB = statementNodeB,  ///
        nonTerminalNodeUnified = metaLevelUnifier.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutionsA, localContextA, localContextB, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (nonTerminalNodeUnified) {
    if (!transformed) {
      const substitutionB = termForVariableSubstitution,  ///
            substitutionsB = [
              substitutionB
            ];

      substitutionsA = transformSubstitutions(substitutionsA, substitutionsB);

      push(substitutions, substitutionsA);
    }

    statementUnifiedAgainstStatement = true;
  }

  return statementUnifiedAgainstStatement;
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
