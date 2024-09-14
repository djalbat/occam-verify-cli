"use strict";

import metaLevelUnifier from "../unifier/metaLevel";

export default function unifyStatementWithStatementGivenSubstitution(statementNodeA, statementNodeB, substitutionA, substitutions, localContextA, localContextB) {
  let statementUnifiedWithStatementGivenSubstitution = false;

  const statementStringA = localContextB.nodeAsString(statementNodeA),  ///
        statementStringB = localContextB.nodeAsString(statementNodeB),
        substitutionStringA = substitutionA.asString(localContextA, localContextA);  ///

  localContextB.trace(`Unifying the '${statementStringB}' statement with the '${statementStringA}' statement given the ${substitutionStringA} substitution...`, statementNodeB);

  const substitutionASubstitutions = substitutionA.getSubstitutions(),
        transformedSubstitutionA = substitutionA.transformed(substitutions),
        substitutionsB = substitutionASubstitutions,  ///
        substitutionB = transformedSubstitutionA; ///

  if (substitutionB !== null) {
    substitutionsB.addSubstitution(substitutionB, localContextB, localContextB);  ///
  }

  const nodeA = statementNodeA,  ///
        nodeB = statementNodeB,  ///
        unified = metaLevelUnifier.unify(nodeA, nodeB, substitutionsB, localContextB, localContextB); ///

  if (unified) {
    if (substitutionB !== null) {
      substitutionsB.removeSubstitution(substitutionB, localContextB, localContextB);
    }

    substitutionsB.forEachSubstitution((substitutionB) => {
      const transformedSubstitutionB = substitutionB.transformedVariableNode(substitutions);

      if (transformedSubstitutionB !== null) {
        const substitution = transformedSubstitutionB;  ///

        substitutions.addSubstitution(substitution, localContextA, localContextB);
      }
    });

    statementUnifiedWithStatementGivenSubstitution = true;
  }

  if (statementUnifiedWithStatementGivenSubstitution) {
    localContextB.debug(`...unified the '${statementStringB}' statement with the '${statementStringA}' statement given the ${substitutionStringA} substitution.`, statementNodeB);
  }

  return statementUnifiedWithStatementGivenSubstitution;
}
