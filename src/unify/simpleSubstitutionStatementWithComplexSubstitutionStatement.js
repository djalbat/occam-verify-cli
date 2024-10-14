"use strict";

import metaLevelUnifier from "../unifier/metaLevel";

export default function unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(simpleSubstitutionStatementNode, complexSubstitutionStatementNode, substitutions, localContextA, localContextB) {
  let simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement;

  const simpleSubstitutionStatementString = localContextB.nodeAsString(simpleSubstitutionStatementNode),
        complexSubstitutionStatementString = localContextB.nodeAsString(complexSubstitutionStatementNode);

  localContextB.trace(`Unifying the simple substitution's '${simpleSubstitutionStatementString}' statement with the complex substitution's '${complexSubstitutionStatementString}' statement...`, simpleSubstitutionStatementNode);

  const nodeA = complexSubstitutionStatementNode,  ///
        nodeB = simpleSubstitutionStatementNode;  ///

  localContextA = localContextB;  ///

  const unifiedAtMetaLevel = metaLevelUnifier.unify(nodeA, nodeB, substitutionA, substitutions, localContextA, localContextB);

  simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement = unifiedAtMetaLevel;  ///

  if (simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement) {
    localContextB.trace(`...unified the simple substitution's '${simpleSubstitutionStatementString}' statement with the complex substitution's '${complexSubstitutionStatementString}' statement.`, simpleSubstitutionStatementNode);
  }

  return simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement;
}
