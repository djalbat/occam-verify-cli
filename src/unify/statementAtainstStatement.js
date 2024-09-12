"use strict";

import Substitutions from "../substitutions";
import metaLevelUnifier from "../unifier/metaLevel";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { push } from "../utilities/array";

export default function unifyStatementWithStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementUnifiedWithStatement = false;

  const transformedSubstitutions = Substitutions.fromNothing(),
        transformedSubstitution = substitution.transformed(substitutions);

  if (transformedSubstitution !== null) {
    transformedSubstitutions.addSubstitution(transformedSubstitution, localContextA, localContextB);
  }

  const nodeA = statementNodeA,  ///
        nodeB = statementNodeB,  ///
        unified = metaLevelUnifier.unify(nodeA, nodeB, transformedSubstitutions, localContextA, localContextB);

  if (unified) {
    if (transformedSubstitution === null) {

      debugger

      const substitutionB = termForVariableSubstitution,  ///
            substitutionsB = [
              substitutionB
            ];

      substitutionsA = transformSubstitutions(substitutionsA, substitutionsB);

      push(substitutions, substitutionsA);
    }

    statementUnifiedWithStatement = true;
  }

  return statementUnifiedWithStatement;
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
