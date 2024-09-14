"use strict";

import Substitutions from "../substitutions";
import intrinsicLevelUnifier from "../unifier/intrinsicLevel";

export default function unifyStatementWithStatementGivenEquivalences(statementNodeA, statementNodeB, equivalences, localContextA, localContextB) {
  let statementUnifiedWithStatementGivenEquivalences = false;

  const statementStringA = localContextA.nodeAsString(statementNodeA),
        statementStringB = localContextB.nodeAsString(statementNodeB);

  localContextB.trace(`Unifying the '${statementStringB}' statement with the '${statementStringA}' statement given equivalences...`, statementNodeB);

  if (!statementUnifiedWithStatementGivenEquivalences) {
    const substitutions = Substitutions.fromNothing(),
          nodeA = statementNodeA,  ///
          nodeB = statementNodeB,  ///
          unified = intrinsicLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    if (unified) {
      const substitutionsUnifiedWithEquivalences = substitutions.unifyWithEquivalences(equivalences, localContextA, localContextB);

      statementUnifiedWithStatementGivenEquivalences = substitutionsUnifiedWithEquivalences;  ///
    }
  }

  if (!statementUnifiedWithStatementGivenEquivalences) {
    const localContext = localContextA; ///

    localContextA = localContextB;  ///

    localContextB = localContext; ///

    const substitutions = Substitutions.fromNothing(),
          nodeA = statementNodeB,  ///
          nodeB = statementNodeA,  ///
          unified = intrinsicLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    if (unified) {
      const substitutionsUnifiedWithEquivalences = substitutions.unifyWithEquivalences(equivalences, localContextA, localContextB);

      statementUnifiedWithStatementGivenEquivalences = substitutionsUnifiedWithEquivalences;  ///
    }
  }

  if (statementUnifiedWithStatementGivenEquivalences) {
    localContextB.debug(`...unified the '${statementStringB}' statement with the '${statementStringA}' statement given equivalences.`, statementNodeB);
  }

  return statementUnifiedWithStatementGivenEquivalences;
}